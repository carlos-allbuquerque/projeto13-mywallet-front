import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Login from "./components/Login/Login";

export default function App() {
    return (
        <GlobalStyles>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                    </Routes>
            </BrowserRouter>
        </GlobalStyles>
    );
}