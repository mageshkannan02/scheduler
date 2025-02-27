import { Input } from '@heroui/react';
import { cn } from '@heroui/theme';
import React from 'react';

interface AutoCompleteProps {
  id?: string;
  classNames?: {
    base?: string;
    label?: string;
    description?: string;
    startIcon?: string;
    endIcon?: string;
  };
  isReadOnly?: boolean;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  minValue?: number;
  maxValue?: number;
  type?: 'text' | 'number' | 'email' | 'password';
  description?: string;
  unit?: string ;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  onInputChange?: (value: string) => void;
}

export const InputField = ({
  id,
  classNames,
  isReadOnly = false,
  label = 'Venue name',
  placeholder = 'Sunflower Block',
  defaultValue = '',
  startIcon = null,
  endIcon = null,
  minValue,
  maxValue,
  type = 'text',
  description = 'Description Text',
  unit,
  variant = 'flat',
  onInputChange,
  ...rest
} : AutoCompleteProps) => {

  const [inputValue, setInputValue] = React.useState<string>(
    defaultValue ? `${defaultValue} ${unit}`.trim() : ''
  );

  // Handle input change and update state with unit
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
  
    if (unit) {
      value = value.replace(/[^\d]/g, ''); // Allow only numbers
      if (value) {
        value = `${value} ${unit}`.trim(); // Append unit only if it's not empty
      }
    }
  
    setInputValue(value);
    onInputChange?.(value); // Pass updated value
  };  

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent', classNames?.base)}>
      <div className={cn('font-regular text-[14px] text-[#25272D] mb-4', classNames?.label)}>
        {label}
      </div>
      <Input
        className="mb-[7px]"
        classNames={{
          inputWrapper: variant !== 'bordered' ? 'bg-[#F8FAFB] hover:bg-[#F8FAFB]' : '',
        }}        
        variant={variant}
        isReadOnly = {isReadOnly}
        value={inputValue}
        defaultValue={defaultValue}
        placeholder={placeholder}
        startContent={<div className={cn("pointer-events-none flex items-center",classNames?.startIcon)}>{startIcon}</div>}
        endContent={<div className={cn("pointer-events-none flex items-center",classNames?.endIcon)}>{endIcon}</div>}
        min={minValue}
        max={maxValue}
        type={type}
        onChange={handleChange}
        {...rest}
      />
      <div className={cn('text-[#464646] font-regular text-[12px]', classNames?.description)}>
        {description}
      </div>
    </div>
  );
};
