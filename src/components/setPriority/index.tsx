import { cn } from '@heroui/theme';
import React from 'react';

const priorities = [
  { id: 'high', label: 'High', color: 'text-red-500 border-red-500' , activeColor : 'text-white bg-red-500'},
  { id: 'medium', label: 'Medium', color: 'text-orange-500 border-orange-500' , activeColor : 'text-white bg-orange-500'},
  { id: 'low', label: 'Low', color: 'text-green-500 border-green-500' , activeColor : 'text-white bg-green-500'},
];

interface AutoCompleteProps {
    id?: string;
    classNames?: {
        base?: string;
        label?: string;
        priorities?: string;
        buttonLabel? : string;
    };
}

export const SetPriority = ({ id, classNames }: AutoCompleteProps) => {

  const [selectedPriority, setSelectedPriority] = React.useState('High');

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent space-y-4',classNames?.base)}>
      <div className={cn('font-semibold text-[18px] font-poppins',classNames?.label)}>Set Priority</div>
      <div className='flex gap-10'>
        {priorities?.map((priority) => (
          <label
            key={priority?.id}
            className={cn(
                `flex items-center justify-center cursor-pointer px-1.5 py-[3px] rounded-md border ${
                selectedPriority === priority.label ? priority?.activeColor : priority?.color
                }`,
                selectedPriority !== priority.label && 'bg-white',
                classNames?.priorities
            )}
          >
            <input
              type='radio'
              id={priority?.id}
              name='priority'
              value={priority?.label}
              checked={selectedPriority === priority?.label}
              onChange={() => setSelectedPriority(priority?.label)}
              className='hidden h-max'
            />
            <span className={classNames?.buttonLabel}>{priority?.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
