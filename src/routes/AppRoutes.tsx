import * as React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import Registro from "../pages/Registro"

// const PrivateRoute = React.lazy(() => import('./PrivateRoute'));


const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route element={<Login />} path="/login" />
            <Route element={<Registro />} path="/registro" /> 
        </Routes>
    )

}
export default AppRoutes