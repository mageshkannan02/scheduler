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

export const Sidebar = () => {
  const [selected, setSelected] = React.useState<string | null>("category");
  return (
    <div className="h-screen  w-[88px] flex flex-col justify-between items-center border-1 border-red-500 pt-4 pb-14">
      <div className="flex flex-col gap-12">
        <BitSchedulerLogo />
        <div className="flex gap-3 flex-col">
          <div className="cursor-pointer" onClick={() => setSelected("category")}>
            {selected === "category" ? <CategorySelectedIcon /> :  <CategoryUnSelectedIcon />}
          </div>
          <div className="cursor-pointer" onClick={() => setSelected("schedule")}>
            {selected === "schedule" ? <ScheduleSelected /> :   <ScheduleUnSelected />}
          </div>
          <div className="cursor-pointer" onClick={() => setSelected("folder")}>
            {selected === "folder" ? <FolderSelected /> : <FolderUnSelected />}
          </div>
        </div>
      </div>
      <LogOutIcon cursor="pointer" onClick={()=>console.log("Logout clicked")} />
    </div>
  );
};

export default Sidebar;
