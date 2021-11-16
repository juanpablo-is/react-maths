import styled from 'styled-components';

export const Wrapper = styled.div`
  width: max-content;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    .symbol {
      width: 40px;
      text-align: center;
      font-size: 32px;
      color: var(--colorPrimary);
      font-weight: bold;
    }

    .result {
      border-top: 2px solid var(--colorPrimary);
    }
  }
`;

export const Expression = styled.div`
  .line {
    width: fit-content;
  }
`;

export const Content = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;
`;
