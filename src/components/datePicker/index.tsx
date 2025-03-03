import { DatePicker } from '@heroui/react';
import { cn } from '@heroui/theme';
import { CakeIcon } from '@/assets';
import React from 'react';
import { DateValue, CalendarDate, CalendarDateTime, parseDate, parseDateTime, getLocalTimeZone, today } from "@internationalized/date";

interface DatePickerComponentProps {
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
  value?: DateValue | null;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  defaultValue?: string;
  description?: string;
  showTime?: boolean;  // Enables time selection
  onInputChange?: (value: DateValue | null) => void;
}

export const DatePickerComponent = ({
  id,
  classNames,
  isReadOnly = false,
  label = 'Venue name',
  value,
  defaultValue = '',
  startIcon = null,
  endIcon = <CakeIcon />,
  description = 'Description Text',
  showTime = false,
  onInputChange,
  ...rest
}: DatePickerComponentProps) => {
  // Convert string defaultValue based on showTime
  const initialDate: DateValue | null = defaultValue
    ? showTime 
      ? parseDateTime(defaultValue) // Includes time
      : parseDate(defaultValue) // Date-only
    : null;

  const [selectedDate, setSelectedDate] = React.useState<DateValue | null>(value || initialDate);

  const handleChange = (date: DateValue | null) => {
    setSelectedDate(date);
    onInputChange?.(date);
  };

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent', classNames?.base)}>
      <div className={cn('font-regular text-[14px] text-[#25272D] mb-4', classNames?.label)}>
        {label}
      </div>
      <DatePicker
        showMonthAndYearPickers
        className="mb-[7px]"
        classNames={{
          inputWrapper: 'bg-[#F8FAFB] hover:bg-[#F8FAFB]',
        }}
        isReadOnly={isReadOnly}
        value={selectedDate}
        startContent={<div className={cn("pointer-events-none flex items-center",classNames?.startIcon)}>{startIcon}</div>}
        endContent={<div className={cn("pointer-events-none flex items-center",classNames?.endIcon)}>{endIcon}</div>}
        onChange={handleChange}
        maxValue={today(getLocalTimeZone())}
        granularity={showTime ? "minute" : "day"} // Now correctly applies only when showTime is enabled
        {...rest}
      />
      <div className={cn('text-[#464646] font-regular text-[12px]', classNames?.description)}>
        {description}
      </div>
    </div>
  );
};
