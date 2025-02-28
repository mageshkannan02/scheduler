import { Routes, Route } from "react-router-dom";
import { Deepak } from "../pages/index";
import { Magesh, Mukesh } from "../pages/index";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/magesh" element={<Magesh />} />
            <Route path="/deepak" element={<Deepak />} />
            <Route path="/mukesh" element={<Mukesh />} />
        </Routes>
    );
};


