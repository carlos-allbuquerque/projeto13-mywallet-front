import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
    }
`

export const Header = styled.div`
    width: 87%;
    height: 11%;
    display: flex;
    align-items: center;
`

export const Form = styled.form`
    width: 87%;
    display: flex;
    flex-direction: column;

    input {
        border-radius: 5px;
        width: 100%;
        height: 65px;  
        margin-bottom: 10px;
    }

    input::placeholder {
        font-size: 20px;
        font-weight: 400;
        color: black;
    }

    button {
        width: 100%;
        height: 60px;
        background-color: #A328D6;
        border: none;
        box-sizing: content-box;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
    }
    
`