import React from "react";
import { InputStyled } from "./Input.styles";

type Props = {
    disabled?: boolean;
    defaultValue?: any;
}

const Input: React.FC<Props> = ({ disabled, defaultValue }) => {

    return (
        <InputStyled type="text" min={0} max={9} disabled={disabled} defaultValue={defaultValue} />
    );
};

export default Input;