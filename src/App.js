import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Login from "./components/Login/Login";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import SignUp from "./components/SighUp/SignUp";

export default function App() {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <GlobalStyles>

            </GlobalStyles>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                    
            </BrowserRouter>
        </UserContext.Provider>

        
    );
}