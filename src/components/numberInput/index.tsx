import { NumberInput } from '@heroui/react';
import { cn } from '@heroui/theme';
import React, { useState } from 'react';

interface NumberInputComponentProps {
  id?: string;
  classNames?: {
    base?: string;
    label?: string;
    startIcon?: string;
    endIcon?: string;
    description?: string;
  };
  hideStepper?: boolean;
  isReadOnly?: boolean;
  label?: string;
  placeholder?: string;
  defaultValue?: number;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  minValue?: number;
  maxValue?: number;
  type?: string;
  description?: string;
  unit?: string;
  radius?: 'sm' | 'md' | 'lg';
  variant?: "flat" | "faded" | "bordered" | "underlined";
  onInputChange?: (value: number) => void;
}

export const NumberInputComponent: React.FC<NumberInputComponentProps> = ({
  id,
  classNames,
  isReadOnly = false,
  label = 'Venue name',
  placeholder = 'Sunflower Block',
  defaultValue = 0,
  startIcon = null,
  endIcon = null,
  minValue = 1,
  maxValue,
  type = 'text',
  description = 'Description Text',
  unit = undefined,
  radius = 'lg',
  variant = 'flat',
  hideStepper = false,
  onInputChange,
  ...rest
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (newValue: number) => {
    setValue(newValue);
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent', classNames?.base)}>
      <div className={cn('font-medium text-[14px] text-[#25272D] mb-4', classNames?.label)}>
        {label}
      </div>
      <NumberInput
        className="w-full mb-[7px]"
        placeholder={placeholder}
        value={value}
        onChange={() => handleChange}
        formatOptions={{
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
            ...(unit ? { style: 'unit', unit: unit, unitDisplay: 'long' } : {}),
        }}  
        startContent={<div className={cn('pointer-events-none flex items-center', classNames?.startIcon)}>{startIcon}</div>}
        endContent={<div className={cn('pointer-events-none flex items-center', classNames?.endIcon)}>{endIcon}</div>}
        isDisabled={false}
        isReadOnly={isReadOnly}
        hideStepper={hideStepper}
        variant={variant}
        size='sm'
        radius={radius}
        minValue={minValue}
        maxValue={maxValue}
        {...rest}
      />
      <div className={cn('text-[#464646] font-regular text-[12px]', classNames?.description)}>
        {description}
      </div>
    </div>
  );
};
