import styled, { css } from "styled-components";

export const InputStyled = styled.input`
    width: 30px;
    text-align: center;
    display: inline-block;
    margin: 10px 20px;
    padding: 3px 0px;
    border-style: solid;
    border-radius: 5px;
    border-width: 1.7px;
    border-bottom-width: 2px;
    
    ${props => props.disabled &&
        css`
            background: white;
            border-color: white;
        `};

     &:focus {
        outline: none;
     } 
`;