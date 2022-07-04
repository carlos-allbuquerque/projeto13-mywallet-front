import { useState, useContext } from "react";
import * as S from "./style";
import dayjs from "dayjs";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Withdraw() {
    const URL = "http://localhost:5000/transaction";

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    const currentDate = dayjs().format("DD/MM");
    
    const [withdraw, setWithdraw] = useState({
        value: "",
        type: "withdraw",
        description: "",
        date: currentDate
    });

    const [value, setValue] = useState(0);

    return(
        <S.Container>
            <S.Header>
                <h1>Nova saída</h1>
            </S.Header>
            <S.Form onSubmit={registerWithdraw}>
                <input
                required
                type="number"
                    placeholder="Valor"
                    value={withdraw.value}
                    onChange={(e)=> {
                        setWithdraw({...withdraw, value: e.target.value})
                        setValue(e.target.value)
                    }}
                />

                <input
                    required
                    type="text"
                    placeholder="Descrição"
                    value={withdraw.description}
                    onChange={(e)=> {
                        setWithdraw({...withdraw, description: e.target.value})
                    }}
                />

                <button type="submit">Salvar saída</button>
            </S.Form>
        </S.Container>
    );

    function registerWithdraw(event) {
        event.preventDefault();

        axios
            .post(URL, withdraw, requestHeader)
            .then((response) => {
                console.log("chegou")
                alert("Depósito realizado com sucesso!");
                navigate("/home")
                setUser({...user, balance: Number(user.balance) - Number(value)})
            })
            .catch((error) => alert("não foi possível realizar o depósito"))
    }
}