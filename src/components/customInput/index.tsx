import { Input } from '@heroui/react';
import { cn } from '@heroui/theme';
import { useState } from 'react';
import { CustomChip } from '../chip';

interface AutoCompleteProps {
  id?: string;
  classNames?: {
    base?: string;
    label?: string;
    endContent?: string;
    
  };
  isReadOnly?: boolean;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  variant?: "flat" | "bordered" | "underlined" | "faded";
  radius?: "sm" | "md" | "lg" | "full" | "none";
  onInputChange?: (value: string) => void;
}

export const CustomInput = ({
  id,
  classNames,
  isReadOnly = false,
  label = 'Enter tags',
  placeholder = 'Type and press Enter',
  type = 'text',
  radius = 'lg',
  variant = 'flat',
  onInputChange,
  ...rest
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState<string[]>([]);

  // Add chip function
  const handleAddChip = () => {
    if (inputValue.trim() && !chips.includes(inputValue.trim())) {
      setChips([...chips, inputValue.trim()]);
      setInputValue('');
    }
  };

  // Add chip when pressing Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddChip();
    }
  };

  // Remove a chip
  const handleRemoveChip = (chipToRemove: string) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  return (
    <div id={id} className={cn('h-fit w-full bg-transparent', classNames?.base)}>
      <div className={cn('font-regular text-[14px] text-[#25272D] mb-[11PX]', classNames?.label)}>
        {label}
      </div>

      <Input
        classNames={{
          base: 'w-full',
          inputWrapper: 'bg-[#F8FAFB] hover:bg-[#F8FAFB] overflow-y-scroll scrollbar-none',
        }}
        radius={radius}
        variant={variant}
        isReadOnly={isReadOnly}
        placeholder={chips.length ? '' : placeholder} // Hide placeholder when chips exist
        type={type}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        startContent={
            <div className="flex items-center gap-2 ">
                {chips.map((chip) => (
                    <CustomChip
                        key={chip}
                        id={chip}
                        onClose={() => handleRemoveChip(chip)}
                        label={chip}
                        chipVariant="primary"
                        variant='flat'
                        isCloseable = {true}
                        baseClassName="!py-3"
                    />
                ))}
            </div>
        }
        endContent={
          <div className={cn(
            "cursor-pointer px-16 py-0.5 ml-4 bg-[#FDFDFD] text-[#606060] rounded-md",
            "shadow-[0px_0px_2px_0px_rgba(0,0,0,0.14)]",
            classNames?.endContent,
          )} 
          onClick={handleAddChip}>
            Add
          </div>
        }
        {...rest}
      />
    </div>
  );
};
