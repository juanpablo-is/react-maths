import React, { useState } from 'react';
import { InputStyled } from './Input.styles';

type Props = {
  disabled?: boolean;
  defaultValue?: any;
  autofocus?: boolean;
  onKeyPress?: () => void;
};

const Input: React.FC<Props> = ({
  disabled,
  defaultValue,
  autofocus,
  onKeyPress,
}) => {
  const [value, setValue] = useState(defaultValue || '');

  return (
    <InputStyled
      type="text"
      disabled={disabled}
      onChange={(e: any) => {
        if (!isNaN(e.nativeEvent.data)) {
          setValue(e.nativeEvent.data ?? '');
        }
      }}
      autoFocus={autofocus}
      value={value}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
