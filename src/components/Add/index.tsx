import React, { useEffect, useState } from 'react';
import SwalAlert from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Button from '../common/Button';
import HeaderNumber from '../common/HeaderNumber';
import Input from '../common/Input';
import { Expression, Result, Wrapper, Content } from './Add.styles';

const Swal = withReactContent(SwalAlert);
let total = "";

type Props = {
    lines: number;
    columns: number;
    header: boolean;
}

const Add: React.FC<Props> = ({ lines, columns, header }) => {
    const [getExpression, setExpression] = useState([""]);

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
                        {Array.from(Array(total.length >= columns ? total.length : columns).keys())
                            .map((index, i, array) => (
                                <Input autofocus={index === array.length - 1} key={i} />
                            ))}
                    </Result>
                </div>
            </Content>

            <Button text="VERIFICAR" variant="second" triggerClick={validateResult} />
        </Wrapper>
    );
}

const validateResult = () => {
    const resultsInput = document.querySelectorAll<HTMLInputElement>(".result input");
    let totalUser = "";

    resultsInput.forEach(result => { totalUser += result.value; });

    if (Number(totalUser) === Number(total)) {
        Swal.fire({
            icon: 'success',
            title: '¡ PERFECTO !',
            text: 'La operación fue correcta.',
            confirmButtonText: 'Realizar otra',
            showCancelButton: true,
            cancelButtonText: 'Cerrar'
        }).then(data => {
            if (data.isConfirmed) {
                window.location.reload();
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La operación fue incorrecta.',
            confirmButtonText: 'De acuerdo'
        });
    }
};

// Create random numbers depending line and columns. 
const createExpression = (line: number, columns: number): any => {
    let countTotal = 0;
    const max = parseInt("9".repeat(columns));

    const expression = Array.from(Array(line).keys()).map(() => {
        const number = Math.floor(Math.random() * max);
        countTotal += number;

        return number.toString().padStart(columns, "0");
    });
    console.log(countTotal);

    total = String(countTotal);
    return { expression };
}

export default Add;