import styled from "styled-components";

export const Form = styled.form`
    height: 400px;
    width: 320px;
    border-radius: 10px;
    background: var(--secundary-color);
    padding: 30px 0 0;
`;

export const Div = styled.div`
    height: 40px;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Input = styled.input`
    background: var(--terciary-color);
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 5px;

    :focus{
        outline: none;
    }
`;

export const Button = styled.button`
    font-weight: bold;
    font-size: 14px;
    padding: 12px;
    border: none;
    border-radius: 10px;
    background: var(--terciary-color);
    border: solid 1.2px var(--primary-color);
    transition: ease-in-out 0.3s;
    cursor: pointer;

    :hover{
        background: var(--primary-color);
        color: var(--terciary-color);
    }
`;

export const Link = styled.p`
    color: var(--primary-color);
    font-weight: bold;
`;

export const Title = styled.h1`
    color: var(--primary-color);
    margin-bottom: 10px;
    text-align: center;
`
export const Span = styled.span`
    color: red;
    font-size: 12px;
    padding-left: 25px;
`