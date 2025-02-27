import { Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { Magesh, Mukesh } from "@/pages";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <PrivateRoute>
        <Magesh />
        <Mukesh />
      </PrivateRoute>
    </Routes>
  );
};
