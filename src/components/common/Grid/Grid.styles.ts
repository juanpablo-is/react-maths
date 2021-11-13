// @ts-ignore
import styled from 'styled-components';

type Props = {
  columns: number;
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: Props) => props.columns || 1}, 1fr);
`;
