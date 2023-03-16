import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';



export default function Routring() {
  return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
  )
}
