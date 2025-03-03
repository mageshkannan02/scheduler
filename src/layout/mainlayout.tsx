import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen bg-gray-100">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
