import { LocationIcon, NotificationIcon } from "@/assets";
import { cn, Image } from "@heroui/react";

interface HeaderComponentProps {
    id?: string;
    classNames?: {
        base?: string;
        header?: string;
        avatar?: string;
    };
    header?: string;
    notificationIcon?: React.ReactNode;
    notificationOnClick?: () => void;
    avatar?: string;
    alt?: string;
}

export const HeaderComponent = ({
    id,
    classNames = {},
    header,
    notificationIcon,
    notificationOnClick,
    avatar,
    alt,
}:HeaderComponentProps) => {

  return (
    <div id={id} className={cn('w-full flex justify-between gap-4 py-[15px] px-[21px]',classNames?.base)}>
        <div className={cn("text-[#464646] text-[20px] font-medium",classNames?.header)}>Dashboard</div>
        <div className="flex gap-5 items-center">
            {notificationIcon || <NotificationIcon/>}
            <Image
                alt={alt || "Profile"}
                src={avatar}
                width={32}
                height={32}
                radius="md"
                className={cn(classNames?.avatar)}
            />
        </div>
    </div>
  );
};