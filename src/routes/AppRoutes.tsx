import * as React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import Registro from "../pages/Registro"
import CategoriaPage from '../pages/CategoriaPage';

// const PrivateRoute = React.lazy(() => import('./PrivateRoute'));


const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Registro />} path="/registro" /> 
            <Route element={<CategoriaPage />} path="/categorias" />
        </Routes>
    )

}
export default AppRoutes