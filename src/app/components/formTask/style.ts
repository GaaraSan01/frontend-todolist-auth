import styled from "styled-components";

export const Div = styled.div`
    height: 100%;
    width: calc(100% - 55px);
    display: flex;
    gap: 10px;
    @media(max-width: 640px){
        flex-direction: column;
    }
`

export const Form = styled.form`
    min-height: 10vh;
    width: 90%;
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media(max-width: 640px){
        width: 95%;
        padding: 10px;
    }
`;

export const Input = styled.input`
    padding: 15px;
    border: 1.5px solid var(--secundary-color);
    border-radius: 5px;
    background: var(--terciary-color);
    font-size: 1rem;
    font-weight: 600;
    flex: 1;
    :focus{
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: var(--primary-color);
    border: 1.5px solid var(--secundary-color);
    height: 50px;
    width: 50px;
    border-radius: 5px;
    color: var(--secundary-color);
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    transition: ease-in-out 0.3s;
    cursor: pointer;

    :hover{
        background: var(--secundary-color);
        color: var(--primary-color);
    }
    @media(max-width: 680px){
        height: 100px;
    }
`;