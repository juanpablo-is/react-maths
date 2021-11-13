import styled from 'styled-components';

export const Link = styled.a`
  background: red;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;

export const ButtonStyle = styled.button`
  /* background: red; */
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 1.2rem;
  transition: box-shadow 0.1s;
  box-shadow: 0 0 0 3px transparent;
  font-weight: 500;

  &.second {
    border: 0;
    border-radius: 0.25em;
    background: initial;
    background-color: var(--colorPrimary);
    color: #fff;
  }

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }
`;
