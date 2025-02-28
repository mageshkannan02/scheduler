import { VenueCalenderIcon } from '@/assets';
import { Avatar, Checkbox } from '@heroui/react';
import { cn } from '@heroui/theme';
import React from 'react';

interface AutoCompleteProps {
  id?: string;
  classNames?: {
    base?: string;
    avatar?: string;
    assignedVenue?: string;
    numberOfSeats?: string;
  };
  isSelected?: boolean;
  avatar?: string;
  priority?: 'high' | 'medium' | 'low';
  assignedVenue?: string;
  numberOfSeats?: number;
  setIsSelected?: (id:string) => void;
}

const borderColorSourceMap = {
    high: 'border-l-[#FF283A]',
    medium: 'border-l-[#FDA31C]',
    low: 'border-l-[#7983C5]',
} as const;

export const AssignVenueCard: React.FC<AutoCompleteProps> = ({
  id,
  classNames,
  isSelected,
  avatar,
  priority = 'high',
  assignedVenue,
  numberOfSeats,
  setIsSelected,
  ...rest
}) => {

  const isLab = assignedVenue?.toLowerCase().includes('lab');

  return (
      <Checkbox
      aria-label='checkbox'
      classNames={{
        base: cn(
          "w-full max-w-full bg-white rounded-full",
          "items-center justify-start",
          "cursor-pointer rounded-xl gap-2 py-4 px-7",
          "shadow-[0px_0px_16px_0px_rgba(112,144,176,0.12)]",
          "border-l-[6px]",borderColorSourceMap[priority],
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
                <div className={cn('text-[#283137] text-[18px] font-semibold truncate',classNames?.assignedVenue)}>{assignedVenue}</div>
            </div>
            <div className='flex gap-8'>
                <div className={cn('text-green-400 text-[14px] font-semibold',classNames?.numberOfSeats)}>
                    {numberOfSeats}{isLab ? ' per lab' : ''}
                </div>
                <VenueCalenderIcon />
            </div>
        </div>
    
    </Checkbox>
  );
};
