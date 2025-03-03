import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="flex ">
     <div className="w-[88px]"><Sidebar /></div> 
      <div className="flex-1 p-4 overflow-scroll scrollbar-hide h-screen bg-gray-100">
          <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
