import UserContext from "../../contexts/UserContext";
import axios from "axios";
import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import logout from "../../assets/logout.svg"
import circle_plus from "../../assets/circle_plus.svg";
import circle_minus from "../../assets/circle_minus.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const URL = "https://project13mywallet.herokuapp.com/history";

    const {user, setUser} = useContext(UserContext);

    const [accountData, setAccountData] = useState([]);
    const navigate = useNavigate();

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    useEffect(() => {
        axios
            .get(URL, requestHeader)
            .then(response => {
                console.log(response.data)
                setAccountData(response.data)
            })
    }, [])
    return (
        <S.Container>
            <S.Box>
                <h1>{`Olá, ${user.name}`}</h1>
                <img src={logout} alt="" onClick={() => navigate("/login")} />
            </S.Box>
            <S.History>
                <S.HistoryList>
                    {accountData.map((transaction, index) => 
                        <Transaction value={transaction.value} date={transaction.date} 
                    type={transaction.type} description={transaction.description} key={index} />
                )}
                </S.HistoryList>

                <S.Balance color={(user.balance === 0) ? "red": "green"}>
                    <h2>SALDO</h2>
                    <h3 >{`${user.balance}`}</h3>
                </S.Balance>
            </S.History>
            <S.Transactions>
                <button onClick={() => navigate("/deposit")}>
                    <img src={circle_plus} alt=""/>
                    <h2>Nova entrada</h2>
                </button>
                <button onClick={() => navigate("/withdraw")}>
                <img src={circle_minus} alt=""/>
                <h2>Nova saída</h2>
                </button>
            </S.Transactions>
        </S.Container>
    );
}

function Transaction({
        value, 
        date,
        type,
        description
    }) {
        
        return(
            <S.TContainer >
                <S.TBox>
                    <S.Date>{`${date}`}</S.Date>
                    <S.Description>{`${description}`}</S.Description>                    
                </S.TBox>
                <S.Value color={(type === "deposit") ? "#03AC00":"#C70000"}>
                    {`${value}`}
                </S.Value>
            </S.TContainer>
        );
    }