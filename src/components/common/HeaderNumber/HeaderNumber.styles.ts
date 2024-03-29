import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .symbol {
    width: 40px;
    text-align: center;
  }

  .auxHeader {
    border-bottom: 1px solid grey;

    input {
      border-top-color: white;
      border-right-color: white;
      border-left-color: white;
    }
  }
`;
