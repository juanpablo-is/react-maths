import React from 'react';

import { ButtonStyle, Link } from './Button.styles';

type Props = {
    text: string;
    path?: string;
    triggerClick?: any;
}

// Components
const Button: React.FC<Props> = ({ text, path, triggerClick }) => {
    return (
        path ? <Link href={path}>{text}</Link>
            : <ButtonStyle onClick={triggerClick}>{text}</ButtonStyle>
    );
};

export default Button;