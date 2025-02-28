import { Chip as NextChip, ChipProps as NextChipProps } from '@heroui/react';
import { cn } from '@heroui/theme';

// Maps to define background colors for different chip variants
const bgColorSourceMap = {
    primary: 'bg-[#E1FFF7]',
    neutralLight: 'text-[#EFF8FF]',
    neutral: 'bg-[#D9E9FB]',
    danger: 'bg-[#FEF3F2]',
    success: 'bg-[#ECFDF3]',
    warningLight: 'bg-[#EEE9FF]',
    warning: 'bg-[#FFE9FA]',
};

// Maps to define text colors for different chip variants
const LabelColorSourceMap = {
    primary: 'text-[#00825F]',
    neutralLight: 'text-[#175CD3]',
    neutral: 'text-[#1565C0]',
    danger: 'text-[#F04438]',
    success: 'text-[#12B76A]',
    warningLight: 'text-[#4015C0]',
    warning: 'text-[#C0159B]',
};

// Maps to define border colors same as text colors
const borderColorSourceMap = {
    primary: 'border-[#00825F]',
    neutralLight: 'border-[#175CD3]',
    neutral: 'border-[#1565C0]',
    danger: 'border-[#F04438]',
    success: 'border-[#12B76A]',
    warningLight: 'border-[#4015C0]',
    warning: 'border-[#C0159B]',
};

const dotColorSourceMap = {
    success : 'bg-green-500',
    danger : 'bg-red-500',
};

// Extending ChipProps from NextChip to ensure compatibility
export interface CustomChipProps extends Omit<NextChipProps, 'color'> {
    size?: 'sm' | 'md' | 'lg';
    label: string;
    isDisabled?: boolean;
    isCloseable?: boolean;
    avatar?: React.ReactNode;
    chipClass?: string;
    endContent?: React.ReactNode;
    startContent?: React.ReactNode;
    chipVariant?: 'primary' | 'neutralLight' | 'neutral' | 'danger' | 'success' | 'warningLight' | 'warning' | '';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    textClassName?: string;
    baseClassName?: string;
    closeButtonClass?: string;
    variant?: 'solid' | 'flat' | 'bordered' | 'light' | 'faded' | 'shadow' | 'dot';
    remainingSeats?: number;
    handleClick?: () => void;
    handleClose?: () => void;
}

export const CustomChip = ({
    label,
    avatar,
    size = 'sm',
    radius = 'full',
    variant = 'flat',
    isDisabled = false,
    isCloseable = false,
    chipClass,
    endContent,
    startContent,
    chipVariant,
    remainingSeats,
    textClassName,
    baseClassName,
    closeButtonClass,
    handleClick = () => {},
    handleClose = () => {},
    ...rest
}: CustomChipProps) => {
    const backgroundColorClass = isDisabled
        ? 'bg-[#EDEDED80]'
        : bgColorSourceMap[chipVariant as keyof typeof bgColorSourceMap] || '';

    const labelColorClass = isDisabled
        ? 'text-[#8E8E8E80]'
        : LabelColorSourceMap[chipVariant as keyof typeof LabelColorSourceMap] || '';

    const borderColorClass = isDisabled
        ? 'border-[#8E8E8E80]'
        : variant === 'bordered'
        ? borderColorSourceMap[chipVariant as keyof typeof borderColorSourceMap] || ''
        : 'border-transparent';

    const dotColorClass = isDisabled ? 'bg-gray-500/30' : dotColorSourceMap[chipVariant as keyof typeof dotColorSourceMap];

    return (
        <NextChip
            size={size}
            avatar={avatar}
            radius={radius}
            variant={variant}
            isDisabled={isDisabled}
            isCloseable={isCloseable}
            startContent={startContent}
            endContent={
                remainingSeats !== undefined && 
                <div className={cn("pointer-events-none flex justify-center items-center w-[22px] h-[22px] bg-[#777777] rounded-full text-[10px] font-source text-[#FDFDFD] font-bold")}>
                    {remainingSeats !== undefined && (remainingSeats === 0 ? 0 : remainingSeats > 0 && remainingSeats < 10 ? `0${remainingSeats}` : remainingSeats)}
                </div>}
            onClick={handleClick}
            onClose={isCloseable ? handleClose : undefined}
            className={cn('cursor-pointer border',isDisabled && '!cursor-not-allowed', borderColorClass, chipClass)}
            classNames={{
                base: cn('font-source gap-[6px] py-4 px-2.5', backgroundColorClass, baseClassName),
                content: cn(labelColorClass, 'font-source font-medium !text-body3 px-0', textClassName),
                dot: cn('w-[6px] h-[6px]',dotColorClass),
                closeButton: cn('text-[#FB374880]',closeButtonClass)
            }}
            {...rest}
        >
            {label}
        </NextChip>
    );
};
