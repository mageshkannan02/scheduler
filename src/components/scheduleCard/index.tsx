import { Avatar, cn } from "@heroui/react";

export interface CustomChipProps {
  id?: string;
  classNames?: {
    base?: string;
    title?: string;
    time?: string;
    createdBy?: string;
  }
  title: string;
  time: string;
  createdBy?: string;
}

export const ScheduleCard = (props: CustomChipProps) => {
    const { id , classNames } = props;
  return (
    <div 
    id={id} 
    className={cn("px-3.5 py-2.5 flex gap-4 justify-between items-center bg-[#FFB8BD80] border border-[#FF3025] border-2 border-l-4 rounded-md",classNames?.base)}>
      <div className="w-full overflow-hidden text-[14px] flex-[1]">
        <p className={cn("font-semibold text-[#25272D] truncate",classNames?.title)}>{props?.title}</p>
        <p className={cn("font-regular text-[#8F929C] truncate",classNames?.time)}>{props?.time}</p>
      </div>
      {props.createdBy && (
        <Avatar size="sm" className={cn("outline outline-2 outline-white",classNames?.createdBy)} src={props?.createdBy} />
      )}
    </div>
  );
};
