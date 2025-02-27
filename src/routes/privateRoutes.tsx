import { Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { Magesh } from '@/pages';



export const PrivateRoutes = () => {
    return (
        <Routes>
            <PrivateRoute> <Magesh/></PrivateRoute>
        </Routes>
    );
};


