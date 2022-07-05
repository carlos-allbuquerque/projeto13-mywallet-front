import { useState, useContext } from "react";
import * as S from "./style";
import dayjs from "dayjs";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Deposit() {
    const URL = "https://projeto13backdriven.herokuapp.com/transaction";

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const requestHeader = {
        headers: {
        Authorization: `Bearer ${user.token}`,
        },
    };

    const currentDate = dayjs().format("DD/MM");
    
    const [deposit, setDeposit] = useState({
        value: "",
        type: "deposit",
        description: "",
        date: currentDate
    });

    const [value, setValue] = useState(0);

    return(
        <S.Container>
            <S.Header>
                <h1>Nova entrada</h1>
            </S.Header>
            <S.Form onSubmit={registerDeposit}>
                <input
                required
                type="number"
                    placeholder="Valor"
                    value={deposit.value}
                    onChange={(e)=> {
                        setDeposit({...deposit, value: e.target.value})
                        setValue(e.target.value)
                    }}
                />

                <input
                    required
                    type="text"
                    placeholder="Descrição"
                    value={deposit.description}
                    onChange={(e)=> {
                        setDeposit({...deposit, description: e.target.value})
                    }}
                />

                <button type="submit">Salvar saída</button>
            </S.Form>
        </S.Container>
    );

    function registerDeposit(event) {
        event.preventDefault();

        axios
            .post(URL, deposit, requestHeader)
            .then((response) => {
                console.log("chegou")
                alert("Depósito realizado com sucesso!");
                navigate("/home")
                setUser({...user, balance: Number(user.balance) + Number(value)})
            })
            .catch((error) => alert("não foi possível realizar o depósito"))
    }
}