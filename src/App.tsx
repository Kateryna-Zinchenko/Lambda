import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './styles/global.css';
import Correctarium from "./components/pages/Correctarium/Correctarium";
import Main from "./components/pages/Main/Main";
import Login from "./components/pages/Authorization/Login";
import SignUp from "./components/pages/Authorization/SignUp";
import {useDispatch, useSelector } from 'react-redux';
import Me from "./components/pages/Authorization/Me";
import {checkAuth} from "./redux/actions/authorization";

function App() {
  const isAuth = useSelector((state: any) => state.authorizationn.isAuth);

  const dispatch = useDispatch<any>();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    })

  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/correctarium' element={<Correctarium />} />
        <Route path='/authorization' element={!isAuth ?
            <Navigate to="/authorization/login" /> :
            <Navigate to="/authorization/me" />} />
        <Route path='/authorization/login' element={<Login />} />
        <Route path='/authorization/me' element={<Me />} />
        <Route path='/authorization/signup' element={<SignUp />} />
      </Routes>
  );
}

export default App;
