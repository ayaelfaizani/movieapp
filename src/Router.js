import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Movies/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    );
};