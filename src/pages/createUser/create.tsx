import { InfraIcon, RolesIcon, SheduleIcon, UserIcon } from "@/assets";
import { TabsComp } from "@/components";
import React from "react";
import { Mukesh } from "../mukesh/page";
import { Deepak } from "../deepak/page";
import { Infrasection } from "./components/infrasection";

export default function CreateUser() {
  const tabItems = [
    {
      key: "users",
      label: "Users",
      icon: <UserIcon />,
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
  const [selectedTab, setSelectedTab] = React.useState<string>(
    tabItems[0]?.key || ""
  );

  return (
    <div className="flex h-full flex-col gap-4">
      <TabsComp
        tabItems={tabItems}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        tabWidth="w-full"
      />
      <div className="overflow-scroll scrollbar-hide">
      {selectedTab === "users" && (
        <div className="mt-4">
          <Mukesh/>
        </div>
      )}
       {selectedTab === "roles" && (
        <div className="mt-4">
          <Deepak/>
        </div>
      )}
       {selectedTab === "infra" && (
        <div className="mt-4">
          <Infrasection/>
        </div>
      )}
      </div>
    </div>
  );
}
