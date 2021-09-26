import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: max-content;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px auto;

    .content {
        display: flex;
        justify-content: center;
        align-items: center;

        .symbol {
            width: 40px;
            text-align: center;
        }
    }
`;

export const Expression = styled.div`
    .line {
        width: fit-content;
    }

    .line:last-child{
        border-bottom: 1px solid red;
    }
`;

export const Result = styled.div`
`;