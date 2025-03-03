import { VenueNotAvailabeImage } from "@/assets"
import { cn } from "@heroui/theme";
import React from "react";

interface VenueNotAvailabeProps {
    id?: string;
    classNames?: {
        base?: string;
        title?: string;
        description?: string;
    };
    avatar?: React.ReactNode;
    title?: string;
    description?: string;
}

export const VenueNotAvailabe=({
    id = '', 
    classNames  = {}, 
    avatar = <VenueNotAvailabeImage/>, 
    title = 'Venue not available', 
    description = 'Try altering the time to check for venue availability',
}: VenueNotAvailabeProps)=> {
    return (
      <div id={id} className={cn("h-fit w-fit bg-transparent flex flex-col items-center",classNames?.base)}>
        {avatar}
        <div className={cn("text-[#181D27] text-[24px] font-source font-semibold mt-4 mb-1",classNames?.title)}>
            {title}
        </div>
        <div className={cn("w-[75%] text-[#535862] text-[18px] font-medium font-source text-center",classNames?.description)}>
            {description}
        </div>
      </div>
    )
  }