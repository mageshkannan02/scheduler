import { InfraIcon, RolesIcon, SheduleIcon, UserIcon } from "@/assets";
import { TabsComp } from "@/components";
import React from "react";

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
    <div>
      <TabsComp
        tabItems={tabItems}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        tabWidth="w-full"
      />
      {selectedTab === "roles" && (
        <div className="mt-4">
          <h2>This is the roles section content.</h2>
        </div>
      )}
    </div>
  );
}
