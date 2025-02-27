import { Routes, Route } from "react-router-dom";
import { Deepak, Magesh } from "../pages/index";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/magesh" element={<Magesh />} />
            <Route path="/deepak" element={<Deepak />} />
        </Routes>
    );
};


