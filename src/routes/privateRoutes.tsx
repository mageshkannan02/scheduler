import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import CreateUser from "@/pages/createUser/create";
import { ScheduleView } from "@/pages/scheduleView/page";
import { Schedulelist } from "@/pages/scheduleList/page";

export const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="create" element={<CreateUser />} />
          <Route path="view" element={<ScheduleView />} />
          <Route path="folder" element={<Schedulelist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

