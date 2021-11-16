import React from 'react';
import Input from '../Input';
import { Header } from './HeaderNumber.styles';

type Props = {
  columns: number;
};
const HeaderNumber: React.FC<Props> = ({ columns }) => {
  return (
    <Header>
      <div className="symbol"></div>
      <div className="auxHeader">
        {Array.from(Array(columns).keys()).map((_, i) => (
          <Input key={i} />
        ))}
      </div>
    </Header>
  );
};

export default HeaderNumber;
