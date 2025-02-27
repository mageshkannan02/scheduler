import { InfraIcon } from "@/assets/infraIcon";
import { RolesIcon } from "@/assets/rolesIcon";
import { SheduleIcon } from "@/assets/sheduleIcon";
import { UploadIcon } from "@/assets/uploadIcon";
import { UserIcon } from "@/assets/userIcon";
import { ButtonComponent } from "@/components/buttonComponent";
import { TabsComp } from "@/components/tabsComp";
import React from "react";


export const Mukesh=()=> {
  const tabItems = [
    {
      key: "users",
      label: "Users",
      icon: <UserIcon/>,     
    },
    {
      key: "roles",
      label: "Roles",
      icon: <RolesIcon />,
    },
    {
      key: "infra",
      label: "Infrastructure ",
      icon: <InfraIcon />,
    },
    {
      key: "schedules",
      label: "Schedules",
      icon: <SheduleIcon />,
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState<string>(tabItems[0]?.key || "");
  return (
    <div className="!h-[100vh] w-full flex flex-col justify-center items-center bg-gray-200">

      {/* <Button className=" text-white !bg-success font-mono" >BIT SCHEDULER</Button> */}
      <ButtonComponent 
      id="button"
      text="Hello"
      className="bg-primary"
      startIcon={<UploadIcon/>}
      />
      <TabsComp
       tabItems={tabItems}
       selectedTab={selectedTab}
       onTabChange={setSelectedTab}
       tabWidth="w-full"
      />
      {selectedTab==='roles' &&
      <div className="mt-4">
        <h2>This is the roles section content.</h2>
      </div>
      }
    </div>
  );
}