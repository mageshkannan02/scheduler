import { Avatar, Checkbox } from '@heroui/react';
import { cn } from '@heroui/theme';
import React from 'react';

interface AutoCompleteProps {
  id?: string;
  classNames?: {
    base?: string;
    avatar?: string;
    assignedRole?: string;
    numberOfPeople?: string;
    count?: string;
  };
  isSelected?: boolean;
  avatar?: string;
  assignedRole?: string;
  numberOfPeople?: number;
  count?: number;
  setIsSelected?: (id:string) => void;
}

export const AssignRolescard: React.FC<AutoCompleteProps> = ({
  id,
  classNames,
  isSelected,
  avatar,
  assignedRole,
  numberOfPeople,
  count,
  setIsSelected,
  ...rest
}) => {

  return (
      <Checkbox
      aria-label='checkbox'
      classNames={{
        base: cn(
          "w-full max-w-full bg-white rounded-full",
          "items-center justify-start",
          "cursor-pointer rounded-xl gap-2 py-4 px-7 border-none",
          "shadow-[0px_0px_16px_0px_rgba(112,144,176,0.12)]",
        //   "data-[selected=true]:border-primary",
        ),
        label: "w-full",
      }}
      radius='full'
      isSelected={isSelected}
      onValueChange={() => setIsSelected?.("123")}
    >
        <div className='flex justify-between items-center gap-10'>
            <div className='flex gap-6 items-center'>
                <Avatar 
                    size="md" 
                    className={cn("w-[50px] h-[50px]",classNames?.avatar)} 
                    src={avatar}
                />
                <div className={cn('text-[#283137] text-[18px] font-semibold truncate',classNames?.assignedRole)}>{assignedRole}</div>
            </div>
            {numberOfPeople &&
            <div className={cn('text-green-400 text-[14px] font-semibold',classNames?.numberOfPeople)}>
                {numberOfPeople} People
            </div>
            }
            {count &&
            <div className={cn('!text-green-400 text-[14px] font-semibold',classNames?.count)}>
              {count !== undefined && (count === 0 ? 0 : count > 0 && count < 10 ? `0${count}` : count)}
            </div>
            }
            
        </div>
    
    </Checkbox>
  );
};
