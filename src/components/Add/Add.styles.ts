import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Expression = styled.div`
    .line {
        width: fit-content;

        p {
            display: inline-block;
            margin: 10px 20px;
        }
    }

    .line:last-child{
        border-bottom: 1px solid red;
    }
`;