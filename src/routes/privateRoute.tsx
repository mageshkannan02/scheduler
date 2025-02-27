import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const PrivateRoute = ({ children }:any) => {
    const {authUser}:any=useAuthStore();
    const isAuthenticated =authUser?true:false ; // Example: Use your auth logic

    return isAuthenticated ? children : <Navigate to="/" />;
};


