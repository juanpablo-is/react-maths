import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import HeaderNumber from '../common/HeaderNumber';
import Input from '../common/Input';
import { Expression, Result, Wrapper } from './Add.styles';

type Props = {
    lines: number;
    columns: number;
    header: boolean;
}

const Add: React.FC<Props> = ({ lines, columns, header }) => {
    const [getExpression, setExpression] = useState([""]);
    const [getTotal, setTotal] = useState(0);

    useEffect(() => {
        const { expression, total } = createExpression(lines, columns);

        setExpression(expression);
        setTotal(total);
    }, [lines, columns]);

    return (
        <Wrapper>
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
                <Result>
                    {Array.from(Array(columns).keys()).map((_, i) => (
                        <Input key={i} />
                    ))}
                </Result>
            </div>

            <Button text="Verificar" triggerClick={testing} />
        </Wrapper>
    );
}

const testing = () => {
    console.log("test")
};

// Create random numbers depending line and columns. 
const createExpression = (line: number, columns: number): any => {
    const max = parseInt("9".repeat(columns));
    let total = 0;

    const expression = Array.from(Array(line).keys()).map(() => {
        const number = Math.floor(Math.random() * max);
        total += number;

        return number.toString().padStart(columns, "0");
    });

    return { expression, total };
}

export default Add;