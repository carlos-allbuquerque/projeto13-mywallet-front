import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Raleway', sans-serif;
    height: 100vh;
    display: flex;
    font-family: 'Raleway', sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        margin-bottom: 30px;
        width: 200px;
    }
    
    h3 {
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        margin-top: 30px;
        font-family: 'Raleway', sans-serif;
    }
`

export const Form = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 320px;
        height: 52px;
        padding: 7px;
        margin-bottom: 8px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #000000;
        margin-top: 10px;
    }
    input::placeholder {
        color: #000000;
    }
    button {
        background-color: #A328D6;
        border: none;
        width: 335px;
        height: 62px;
        border-radius: 8px;
        margin-top: 20px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
    }
`