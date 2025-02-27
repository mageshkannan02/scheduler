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
    success : 'bg-green-700',
    danger : 'bg-red-700',
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
    variant?: 'solid' | 'flat' | 'bordered' | 'light' | 'faded' | 'shadow' | 'dot';
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
    textClassName,
    baseClassName,
    ...rest
}: CustomChipProps) => {
    const backgroundColorClass = isDisabled
        ? 'bg-gray-100'
        : bgColorSourceMap[chipVariant as keyof typeof bgColorSourceMap] || '';

    const labelColorClass = isDisabled
        ? 'text-gray-300'
        : LabelColorSourceMap[chipVariant as keyof typeof LabelColorSourceMap] || '';

    const borderColorClass = isDisabled
        ? 'border-gray-300'
        : variant === 'bordered'
        ? borderColorSourceMap[chipVariant as keyof typeof borderColorSourceMap] || ''
        : 'border-transparent';

    const dotColorClass = dotColorSourceMap[chipVariant as keyof typeof dotColorSourceMap] || '';

    return (
        <NextChip
            size={size}
            avatar={avatar}
            radius={radius}
            variant={variant}
            isDisabled={isDisabled}
            endContent={endContent}
            isCloseable={isCloseable}
            startContent={startContent}
            className={cn('cursor-pointer border', borderColorClass, chipClass)}
            classNames={{
                base: cn('font-source gap-[6px] px-2', backgroundColorClass, baseClassName),
                content: cn(labelColorClass, 'font-source font-medium !text-body3 px-0', textClassName),
                dot: cn('w-[6px] h-[6px]',dotColorClass),
            }}
            {...rest}
        >
            {label}
        </NextChip>
    );
};
