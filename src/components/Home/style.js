import styled from "styled-components";

export const Container = styled.div`
    height: 100vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`
export const Box = styled.div`
    height: 11%;
    width: 87%;
    display: flex;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        color: #FFFFFF;
        font-weight: 700;
        margin-top: 30px;
    }
    img {
        height: 32px;
        width: 33px;
        margin-top: 30px;
    }
`

export const History = styled.div`
    width: 87%;
    height: 67%;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Transactions = styled.div`
    width: 87%;
    height: 23%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        height: 75%;
        width: 48%;
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

    h2 {

        font-weight: 700;
        font-size: 19px;
        color: #FFFFFF;
        width: 10px;
        margin: 0 0 10px 10px;
    }

    img {
            width: 30px;
            height: 30px;
            margin: 10px 0 0 10px;
        }
    }
`

export const TContainer = styled.div`
    width: 95%;
    height: 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TBox = styled.div`
    display: flex;
`

export const Date = styled.h2`
    margin-right: 10px;
    color: #C6C6C6;
`
export const Description = styled.h2`
    font-size: 17px;
`
export const Value = styled.h2`
    color: ${props => props.color};
`

export const Balance = styled.div`
    margin-bottom: 10px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    h2 {
        font-weight: 700;
        font-size: 19px;
    }
    h3 {
        font-size: 16px;
        font-weight: 400;
        color: ${props => props.color};
    }
`