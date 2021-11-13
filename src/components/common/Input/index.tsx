import React, { useState } from 'react';
import { InputStyled } from './Input.styles';

type Props = {
  disabled?: boolean;
  defaultValue?: any;
  autofocus?: boolean;
};

const Input: React.FC<Props> = ({ disabled, defaultValue, autofocus }) => {
  const [value, setValue] = useState(defaultValue || '');

  return (
    <InputStyled
      type="number"
      min={0}
      max={9}
      maxLength={1}
      disabled={disabled}
      onChange={(e: any) => {
        setValue(e.nativeEvent.data ?? '');
      }}
      autoFocus={autofocus}
      value={value}
    />
  );
};

export default Input;
