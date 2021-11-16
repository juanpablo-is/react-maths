import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import Swal from 'sweetalert2';

// Components React.
import Button from '../common/Button';
import HeaderNumber from '../common/HeaderNumber';
import Input from '../common/Input';
// Styled-components.
import { Expression, Wrapper, Content } from './AddSub.styles';
// Utils.
import { sendToast } from '../../utils/alerts';

const socket = socketIOClient('http://localhost:5000');

type Props = {
  operation: string;
  header?: boolean;
};

const AddSub: React.FC<Props> = (PropsInit) => {
  const [getExpression, setExpression] = useState([]);
  const [props] = useState({
    ...PropsInit,
    columns: 2,
    lines: 2,
    total: 0,
  });

  // Handler keyPress to inputs to execute validation.
  const validateResultInput = (e?: any) => {
    if (e.code && (e.code === 'Enter' || e.code === 'NumpadEnter')) {
      validateResult(props);
    }
  };

  // Fill number with zero to limit lines.
  const fillNumberPad = (number: number): string => {
    return number.toString().padStart(props.columns, '0');
  };

  useEffect(() => {
    setExpression(createExpression(props));
  }, [props]);

  return (
    <Wrapper>
      <Content>
        {props.header && <HeaderNumber columns={props.columns} />}

        <div className="content">
          <div className="symbol">{props.operation}</div>
          <Expression>
            {getExpression.map((data: any, i: number) => (
              <div key={i} className="line">
                {Array.from(fillNumberPad(data)).map((number, j) => (
                  <Input disabled={true} key={j} defaultValue={number} />
                ))}
              </div>
            ))}
          </Expression>
        </div>

        <div className="content">
          <div className="symbol">=</div>
          <Expression className="result">
            <div className="line">
              {Array.from(
                Array(
                  props.total.toString().length >= props.columns
                    ? props.total.toString().length
                    : props.columns
                ).keys()
              ).map((index, i, array) => (
                <Input
                  onKeyPress={validateResultInput}
                  autofocus={index === array.length - 1}
                  key={i}
                />
              ))}
            </div>
          </Expression>
        </div>
      </Content>

      <Button
        text="VERIFICAR"
        variant="second"
        triggerClick={() => {
          validateResult(props);
        }}
      />
    </Wrapper>
  );
};

export default AddSub;

// Create random numbers depending line and columns.
const createExpression = (props: any): any => {
  let countTotal = 0;
  const max = parseInt('9'.repeat(props.columns));

  const expressions: number[] = [];

  for (let i = 0; i < props.lines; i++) {
    let number = Math.floor(
      Math.random() *
        (props.operation === '-' && i > 0 ? expressions[i - 1] + 1 : max)
    );

    if (props.operation === '+') {
      countTotal = i === 0 ? number : countTotal + number;
    } else if (props.operation === '-') {
      countTotal = i === 0 ? number : countTotal - number;
    }

    expressions.push(number);
  }

  props.total = countTotal;

  return expressions;
};

// Handler to validate result operation.
const validateResult = (props: any) => {
  const inputs = document.querySelectorAll<HTMLInputElement>('.result input');
  let emptyInputs = true;
  let totalUser = '';

  inputs.forEach((result) => {
    if (result.value) {
      emptyInputs = false;
      totalUser += result.value;
    }
  });

  emptyInputs ? sendToast() : sendResultAnalytics(props, totalUser);
};

// Send result to database.
const sendResultAnalytics = (props: any, totalUser: string) => {
  const isCorrect = Number(totalUser) === Number(props.total);

  if (isCorrect) {
    Swal.fire({
      icon: 'success',
      title: '¡ PERFECTO !',
      text: 'La operación fue correcta.',
      confirmButtonText: 'Realizar otra',
      showCancelButton: true,
      cancelButtonText: 'Cerrar',
    }).then((data) => {
      if (data.isConfirmed) {
        window.location.reload();
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La operación fue incorrecta.',
      confirmButtonText: 'De acuerdo',
    });
  }

  socket.emit('attempts', {
    id: '61919f3405e7ad6b1a13e6ab',
    attempts: {
      resultUser: totalUser,
      result: props.total,
      isCorrect,
      operation: '+',
    },
  });
  // socket.emit('user-connect', { id: '61919f3405e7ad6b1a13e6ab' });
};
