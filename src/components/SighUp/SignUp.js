import * as S from "./style";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
    const URL = "https://project13mywallet.herokuapp.com/signup";

    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });
    return (
        <S.Container> 
            <img src={logo} alt="" />
            <S.Form onSubmit={register}>
                <input
                    required
                    placeholder="Nome"
                    type="nome"
                    value={registerData.name}
                    onChange={(e) => 
                        setRegisterData({...registerData, name: e.target.value})
                    }
                
                />
                <input
                    required 
                    type="email"
                    placeholder="E-mail" 
                    value={registerData.email}
                    onChange={(e) => 
                        setRegisterData({...registerData, email: e.target.value})
                    }
                />
                <input 
                    required
                    placeholder="Senha"
                    type="password"
                    value={registerData.password}
                    onChange={(e) => 
                        setRegisterData({...registerData, password: e.target.value})
                    }
                />        

                <input
                    required
                    placeholder="Confirme a senha"
                    type="password"
                    value={registerData.passwordConfirmation}
                    onChange={(e) => 
                        setRegisterData({...registerData, passwordConfirmation: e.target.value})
                    } 
                />

                <button type="submit">Cadastrar</button>
            </S.Form>     
                    <h3 onClick={() => navigate("/")}>Já possui uma conta? Entre</h3>
        </S.Container>
    );
    function register(event) {
        event.preventDefault();

        axios
            .post(URL, registerData)
            .then(() => navigate("/"))
            .catch(() =>  alert("Não foi possível criar uma conta com os dados fornecidos."));
    }
}