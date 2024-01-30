import { Outlet, Navigate } from "react-router-dom";
import { useRegistered } from "./context/RegisterContex";

export function ProtectedRoute(){
    const {auth} = useRegistered();
    if(!auth) return <Navigate to="/register" replace/>;
    return <Outlet/>
}