import {
  BitSchedulerLogo,
  CategorySelectedIcon,
  CategoryUnSelectedIcon,
  FolderSelected,
  FolderUnSelected,
  LogOutIcon,
  ScheduleSelected,
  ScheduleUnSelected,
} from "@/assets";
import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [selected, setSelected] = React.useState<string | null>("category");
  return (
    <div className="h-screen  w-full flex flex-col justify-between items-center border-1 pt-4 pb-14">
      <div className="flex flex-col gap-12">
        <BitSchedulerLogo />
        <div className="flex gap-3 flex-col">
          <NavLink to="/create" className="cursor-pointer" onClick={() => setSelected("category")}>
            {selected === "category" ? <CategorySelectedIcon /> :  <CategoryUnSelectedIcon />}
          </NavLink>
          <NavLink to="/view" className="cursor-pointer" onClick={() => setSelected("schedule")}>
            {selected === "schedule" ? <ScheduleSelected /> :   <ScheduleUnSelected />}
          </NavLink>
          <NavLink to="/folder" className="cursor-pointer" onClick={() => setSelected("folder")}>
            {selected === "folder" ? <FolderSelected /> : <FolderUnSelected />}
          </NavLink>
        </div>
      </div>
      <LogOutIcon cursor="pointer" onClick={()=>console.log("Logout clicked")} />
    </div>
  );
};

export default Sidebar;
