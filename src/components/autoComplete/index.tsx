import { Autocomplete, AutocompleteItem } from '@heroui/react';
import { cn } from '@heroui/theme';
import React, { useState } from 'react';

interface List {
  key?: string;
  label?: string;
}

interface AutoCompleteProps {
  id?: string;
  classNames?: {
    base?: string;
    label?: string;
    description?: string;
  };
  isReadOnly?: boolean;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  countryCodeStartIcon?: React.ReactNode;
  countryCodeEndIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  description?: string;
  options?: List[];
  variant?: "flat" | "bordered" | "underlined" | "faded";
  onInputChange?: (value: string) => void;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  id,
  classNames,
  isReadOnly = false,
  label = 'Select Item',
  placeholder = 'Enter value',
  defaultValue = '',
  countryCodeStartIcon = null,
  countryCodeEndIcon = null,
  description = 'Select an option from the dropdown',
  options,
  variant = 'flat',
  onInputChange,
  ...rest
}) => {
  // Dropdown list items
  

  // State for selected item
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue);

  // Handle dropdown selection
  const handleSelectionChange = (key: string | null) => {
    if (key) {
      setSelectedItem(key);
      onInputChange?.(key);
    }
  };

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent', classNames?.base)}>
      {/* Label */}
      <div className={cn('font-regular text-[14px] text-[#25272D] mb-4', classNames?.label)}>
        {label}
      </div>

      {/* Autocomplete Dropdown */}
      <Autocomplete
        className="mb-[7px] cursor-pointer"
        isReadOnly={isReadOnly}
        placeholder={placeholder}
        variant={variant}
        defaultItems={options}
        selectedKey={selectedItem}
        scrollShadowProps={{ isEnabled: false }}
        onSelectionChange={(key) => handleSelectionChange(key as string)}
        startContent={<div className="pointer-events-none flex items-center">{countryCodeStartIcon}</div>}
        endContent={<div className="pointer-events-none flex items-center">{countryCodeEndIcon}</div>}
        {...rest}
      >
        {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
      </Autocomplete>

      {/* Description */}
      <div className={cn('text-[#464646] font-regular text-[12px]', classNames?.description)}>
        {description}
      </div>
    </div>
  );
};
