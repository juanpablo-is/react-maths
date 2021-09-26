import React from "react";
import { InputStyled } from "./Input.styles";

type Props = {
    disabled?: boolean;
    defaultValue?: any;
}

const Input: React.FC<Props> = ({ disabled, defaultValue }) => (
    <InputStyled disabled={disabled} defaultValue={defaultValue} />
);

export default Input;