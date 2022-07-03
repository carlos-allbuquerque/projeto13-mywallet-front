import styled from "styled-components";


export const Container = styled.div`
    height: 100vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        margin-bottom: 20px;
        width: 200px;
    }
    h3 {
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 700;
        font-style: none;
        margin-top: 30px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        width: 320px;
        height: 52px;
        padding: 7px;
        margin-bottom: 5px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-top: 10px;
    }
    
    input::placeholder {
        color: #000000;
        font-size: 20px;
        font-weight: 400;
    }
    button {
        background-color: #A328D6;
        border: none;
        width: 335px;
        height: 62px;
        border-radius: 8px;
        margin-top: 10px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
    }
`