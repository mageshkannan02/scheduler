import { Routes, Route } from "react-router-dom";
import { Magesh } from "../pages/index";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/magesh" element={<Magesh />} />
            
        </Routes>
    );
};


