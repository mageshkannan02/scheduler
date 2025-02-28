import { Tabs, Tab } from "@heroui/tabs";

interface TabItem {
  key?: string;
  label?: string;
  icon?: React.ReactNode;
}

interface TabsCompProps {
  tabItems: TabItem[];
  selectedTab?: string;
  onTabChange?: (key: string) => void;
  tabColor?: "primary" | "default" | "secondary" | "success" | "warning" | "danger" | undefined;
  tabWidth?: string;
  tabClass?: string;
  customNonActiveClass?: string;
  customActiveClass?: string;
  labelstyle?: string; // CSS class for tab labels (optional)
}

export const TabsComp: React.FC<TabsCompProps> = ({
  tabItems,
  selectedTab,
  onTabChange=()=>false,
  tabColor = "primary",
  tabWidth = "w-full",
  tabClass = "bg-white rounded-lg ",
  customNonActiveClass = "",
  customActiveClass = "bg-primary w-full py-6 rounded-lg ",
  labelstyle='font-semibold text-[1.375rem]'
}) => {
  return (
    <div className={`flex flex-col ${tabWidth}`}>
      <Tabs
        aria-label="Options"
        color={tabColor}
        radius="lg"
        variant="light"
        selectedKey={selectedTab}
        onSelectionChange={(key) => onTabChange(key as string)}
        className={`justify-between flex flex-col ${tabClass}`}
      >
        {tabItems.map((item) => (
          <Tab
            key={item.key}
            className={`${selectedTab === item.key ? customActiveClass : customNonActiveClass}`}
            title={
              <div
                className={`  flex items-center gap-4 rounded cursor-pointer`}
              >
                <span className={labelstyle}>{item.icon}</span>
                <span className={labelstyle}>{item.label}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};
