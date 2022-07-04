import { useNavigate } from "react-router-dom";
import { useState, useContext} from "react";
import UserContext from "../../contexts/UserContext";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import axios from "axios";

export default function Login() {
    const URL = "http://localhost:5000/login";

    const navigate = useNavigate();

    const { setUser } = useContext(UserContext);

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    return(
        <S.Container>
            <img src={logo} alt="" />

            <S.Form onSubmit={login}>
                <input
                    required
                    placeholder="E-mail"
                    type= "email"
                    value={userData.email}
                    onChange={(e) => 
                        setUserData({...userData, email: e.target.value})
                    }
                />

                <input
                    required
                    placeholder="Senha"
                    type="password"
                    value={userData.password}
                    onChange={(e) => 
                        setUserData({...userData, password: e.target.value})
                    }
                />
                <button type="submit">Entrar</button>
            </S.Form>
            <h3 onClick={() =>  navigate("/signup")}>Primeira vez? Cadastre-se!</h3>
        </S.Container>
    );

    function login(event) {
        event.preventDefault();
        userData.password = userData.password.toString();

        axios
            .post(URL, userData)
            .then((response) => {
                setUser(response.data);
                console.log(response.data)
                navigate("/home")
            })
            .catch(() => alert("Não foi possível logar na conta"))
    }
}