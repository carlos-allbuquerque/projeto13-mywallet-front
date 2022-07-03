import { useNavigate } from "react-router-dom";
import * as S from "./style";
import logo from "../../assets/logo.svg";

export default function Login() {
    const URL = "localhost:5000/";

    const navigate = useNavigate();

    return(
        <S.Container>
            <img src={logo} alt="" />
        </S.Container>
    );
}