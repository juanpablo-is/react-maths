import React from 'react';

// Components
import { Wrapper } from './Grid.styles';

// Types
type Props = {
  columns: number;
};

const Grid: React.FC<Props> = ({ columns, children }) => {
  return <Wrapper columns={columns}>{children}</Wrapper>;
};

export default Grid;
