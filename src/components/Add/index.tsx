import React, { useEffect, useState } from 'react';
import SwalAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import socketIOClient from 'socket.io-client';

// Components React.
import Button from '../common/Button';
import HeaderNumber from '../common/HeaderNumber';
import Input from '../common/Input';

// Utils.
import { sendToast } from '../../utils/alerts';

// Styled-components.
import { Expression, Result, Wrapper, Content } from './Add.styles';

const ENDPOINT = 'http://localhost:5000';
const Swal = withReactContent(SwalAlert);
const socket = socketIOClient(ENDPOINT);
let total = '';

// Props type.
type Props = {
  lines: number;
  columns: number;
  header: boolean;
};

const Add: React.FC<Props> = ({ lines, columns, header }) => {
  const [getExpression, setExpression] = useState(['']);

  useEffect(() => {
    const { expression } = createExpression(lines, columns);

    setExpression(expression);
  }, [lines, columns]);

  return (
    <Wrapper>
      <Content>
        {header && <HeaderNumber columns={columns} />}

        <div className="content">
          <div className="symbol">+</div>
          <Expression>
            {getExpression.map((data, i) => (
              <div key={i} className="line">
                {Array.from(data).map((number, j) => (
                  <Input disabled={true} key={j} defaultValue={number} />
                ))}
              </div>
            ))}
          </Expression>
        </div>

        <div className="content">
          <div className="symbol">=</div>
          <Result className="result">
            {Array.from(
              Array(total.length >= columns ? total.length : columns).keys()
            ).map((index, i, array) => (
              <Input
                onKeyPress={validateResultInput}
                autofocus={index === array.length - 1}
                key={i}
              />
            ))}
          </Result>
        </div>
      </Content>

      <Button text="VERIFICAR" variant="second" triggerClick={validateResult} />
    </Wrapper>
  );
};

// Handler keyPress to inputs to execute validation.
const validateResultInput = (e?: any) => {
  if (e.code && (e.code === 'Enter' || e.code === 'NumpadEnter')) {
    validateResult();
  }
};

// Handler to validate result operation.
const validateResult = () => {
  const inputs = document.querySelectorAll<HTMLInputElement>('.result input');
  let emptyInputs = true;
  let totalUser = '';

  inputs.forEach((result) => {
    if (result.value) {
      emptyInputs = false;
      totalUser += result.value;
    }
  });
  console.log(totalUser);

  emptyInputs ? sendToast() : sendResultAnalytics(totalUser);
};

// Send result to database.
const sendResultAnalytics = (totalUser: string) => {
  const isCorrect = Number(totalUser) === Number(total);

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
    attempts: { resultUser: totalUser, result: total, isCorrect },
  });
  // socket.emit('user-connect', { id: '61919f3405e7ad6b1a13e6ab' });
};

// Create random numbers depending line and columns.
const createExpression = (line: number, columns: number): any => {
  let countTotal = 0;
  const max = parseInt('9'.repeat(columns));

  const expression = Array.from(Array(line).keys()).map(() => {
    const number = Math.floor(Math.random() * max);
    countTotal += number;

    return number.toString().padStart(columns, '0');
  });
  console.log(countTotal);

  total = String(countTotal);
  return { expression };
};

export default Add;
