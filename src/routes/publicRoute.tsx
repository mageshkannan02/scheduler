import { Routes, Route } from "react-router-dom";
import { Deepak, Personal } from "../pages/index";
import { Magesh, Mukesh } from "../pages/index";
import { Academic } from "@/pages/personal/page";

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/magesh" element={<Magesh />} />
            <Route path="/deepak" element={<Deepak />} />
            <Route path="/mukesh" element={<Mukesh />} />
            <Route path="/personal" element={<Personal/>} />
            <Route path="/academic" element={<Academic/>} />
        </Routes>
    );
};


