import { Routes, Route } from "react-router-dom";
import { Magesh, Mukesh } from "../pages/index";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/magesh" element={<Magesh />} />
            <Route path="/mukesh" element={<Mukesh />} />
            
        </Routes>
    );
};


