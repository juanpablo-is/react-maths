import React, { useEffect, useState } from 'react';
import { Expression, Wrapper } from './Add.styles';

type Props = {
    lines: number;
    columns: number;
}

const Add: React.FC<Props> = ({ lines, columns }) => {
    const [getExpression, setExpression] = useState([""]);
    const [getTotal, setTotal] = useState(0);

    useEffect(() => {
        const { expression, total } = createExpression(lines, columns);

        setExpression(expression);
        setTotal(total);
    }, [lines, columns]);

    return (
        <Wrapper>
            <div className="symbol">+</div>
            <Expression>
                {getExpression.map((data, i) => (
                    <div key={i} className="line">
                        {Array.from(data).map((number, j) => (
                            <p key={j}>{number}</p>
                        ))}
                    </div>
                ))}
            </Expression>
        </Wrapper>
    );
}

function createExpression(line: number, columns: number): any {
    const max = parseInt("9".repeat(columns));
    let total = 0;

    const expression = Array.from(Array(line).keys()).map(() => {
        const number = Math.floor(Math.random() * max);
        total += number;

        return ((number < 10 ? '0' : '') + number).toString();
    });

    return { expression, total };
}

export default Add;