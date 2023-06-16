import styled from "styled-components";

export const Header = styled.header`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin: auto;
`

export const Title = styled.h1`
    font-size: 20px;
    color: var(--secundary-color);
`

export const Icone = styled.button`
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
        border: solid 1px var(--terciary-color);
    }
`