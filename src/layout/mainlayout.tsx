import { HeaderComponent, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="flex ">
      <div className="w-[88px]"><Sidebar /></div>
      <div className="h-screen flex flex-col w-full">
        <HeaderComponent/>
        <div className=" p-4 overflow-scroll scrollbar-hide bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
