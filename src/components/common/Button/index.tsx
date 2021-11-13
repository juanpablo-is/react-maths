import React from 'react';

import { ButtonStyle, Link } from './Button.styles';

type Props = {
    text: string;
    path?: string;
    triggerClick?: any;
    variant?: string;
}

// Components
const Button: React.FC<Props> = ({ text, path, variant = "", triggerClick }) => {
    return (
        path ? <Link className={variant} href={path}>{text}</Link>
            : <ButtonStyle className={variant} onClick={triggerClick}>{text}</ButtonStyle>
    );
};

export default Button;