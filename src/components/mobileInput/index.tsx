import { Autocomplete, AutocompleteItem, Input } from '@heroui/react';
import { cn } from '@heroui/theme';
import React, { useState } from 'react';

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
  countryCodeStartIcon?: React.ReactNode;
  countryCodeEndIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  description?: string;
  onInputChange?: (value: string) => void;
  onCountryCodeChange?: (value: string) => void;
}

export const MobileInput: React.FC<AutoCompleteProps> = ({
  id,
  classNames,
  isReadOnly = false,
  label = 'Phone Number',
  placeholder = 'Enter phone number',
  defaultValue = '',
  countryCodeStartIcon = null,
  countryCodeEndIcon = null,
  startIcon = null,
  endIcon = null,
  description = 'Enter your phone number',
  onInputChange,
  onCountryCodeChange , 
  ...rest
}) => {
  // Country code list
  const countryCodes = [
    { label: '+91', key: 'india' },
    { label: '+1', key: 'usa' },
    { label: '+44', key: 'uk' },
  ];

  // State for selected country key and phone number
  const [selectedCountry, setSelectedCountry] = useState<string>('india');
  const [phoneNumber, setPhoneNumber] = useState<string>(defaultValue);

  // Find the country code for the selected key
//   const selectedCode = countryCodes.find((c) => c.key === selectedCountry)?.label || '+91';

  // Handle number input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d]/g, ''); // Allow only numbers
    setPhoneNumber(value);
    onInputChange?.(value);
  };

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent', classNames?.base)}>
      {/* Label */}
      <div className={cn('font-regular text-[14px] text-[#25272D] mb-4', classNames?.label)}>
        {label}
      </div>

      {/* Country Code Autocomplete + Phone Number Input */}
      <div className="flex items-center gap-6 flex-cols-4 mb-[7px]">
        {/* Country Code Dropdown */}
        <Autocomplete
          className="flex-[1] !cursor-pointer"
          classNames={{
            base: '!cursor-pointer',
          }}
          isReadOnly = {isReadOnly}
          defaultItems={countryCodes}
          selectedKey={selectedCountry}
          scrollShadowProps={{
            isEnabled: false,
          }}
          onSelectionChange={(key) => setSelectedCountry(key as string)}
          startContent={<div className="pointer-events-none flex items-center">{countryCodeStartIcon}</div>}
          endContent={<div className="pointer-events-none flex items-center">{countryCodeEndIcon}</div>}
        >
          {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
        </Autocomplete>

        {/* Phone Number Input */}
        <Input
          className="flex-[3]"
          classNames={{
            inputWrapper: 'bg-[#F8FAFB] hover:bg-[#F8FAFB]',
          }}
          isReadOnly = {isReadOnly}
          value={phoneNumber} // Only phone number, country code in dropdown
          placeholder={placeholder}
          startContent={<div className={cn("pointer-events-none flex items-center",classNames?.startIcon)}>{startIcon}</div>}
          endContent={<div className={cn("pointer-events-none flex items-center",classNames?.endIcon)}>{endIcon}</div>}
          type="text"
          onChange={handleInputChange}
          {...rest}
        />
      </div>

      {/* Description */}
      <div className={cn('text-[#464646] font-regular text-[12px]', classNames?.description)}>
        {description}
      </div>
    </div>
  );
};
