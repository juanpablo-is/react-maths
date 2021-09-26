import React from 'react';

import { Link } from './Button.styles';

type Props = {
    text: string;
    path?: string;
}

// Components
const Button: React.FC<Props> = ({ text, path = "" }) => {
    return (
        path
            ? <Link href={path}>{text}</Link>
            : <Link>{text}</Link>
    );
};

export default Button;