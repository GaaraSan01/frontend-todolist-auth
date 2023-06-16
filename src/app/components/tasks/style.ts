import { css } from "styled-components";
import styled from "styled-components";


export const Container = styled.div`
    width: 88%;
    display: flex;
    border: solid 1.5px var(--secundary-color);
    border-radius: 10px;
    justify-content: space-around;
    padding: 15px;
    margin: 10px auto;

    @media(max-width: 640px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Div = styled.div`
    height: 15vh;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    @media(max-width: 640px){
        width: 100%;
        height: 8vh;
    }
`
export const Title = styled.h2`
    ${({color}) => color ? css`
        color: ${color};
        cursor: pointer;
    ` : css`
        color: var(--terciary-color);
    `}
`
export const SubTitle = styled.h3`
    color: var(--terciary-color);
`
export const P = styled.p`
    color: var(--secundary-color);
    font-size: 14px;
    font-weight: 600;
`
export const Select = styled.select`
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-weight: 600;
    text-transform: capitalize;
    background-color: var(--terciary-color);
    cursor: pointer;
    :focus{
        outline: none;
    }
`

export const EditTask = styled.form`
    height: 100%;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media(max-width: 640){
        width: 95%;
        padding: 10px;
    }
`

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
`

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
`