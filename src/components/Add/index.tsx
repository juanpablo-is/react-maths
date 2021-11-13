import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import HeaderNumber from '../common/HeaderNumber';
import Input from '../common/Input';
import { Expression, Result, Wrapper, Content } from './Add.styles';

type Props = {
    lines: number;
    columns: number;
    header: boolean;
}

let total = "";

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
                        {Array.from(Array(total.length).keys()).map((_, i) => (
                            <Input key={i} />
                        ))}
                    </Result>
                </div>
            </Content>

            <Button text="Verificar" triggerClick={validateResult} />
        </Wrapper>
    );
}

const validateResult = () => {
    const resultsInput = document.querySelectorAll<HTMLInputElement>(".result input");
    let totalUser = "";

    resultsInput.forEach(result => { totalUser += result.value; });

    console.log(totalUser === total);
    console.log({ total });
    console.log({ totalUser });
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

    total = String(countTotal);
    return { expression };
}

export default Add;