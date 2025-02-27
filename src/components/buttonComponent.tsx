import { Button } from '@heroui/react';
import React from 'react'
interface ButtonProps {
	id?: string;
	text?: string;
	width?: string;
	onClick?: () => void;
	icon?: React.ReactNode;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	variant?: 'solid' | 'flat' | 'bordered' | 'light';
	radius?: 'sm' | 'md' | 'lg' | 'none' | 'full';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	className?: string;
    textClassName?: string;
}
export const ButtonComponent=({
	id,
	text,
	width='w-full',
	onClick = () => false,
	icon,
	startIcon,
	endIcon,
	variant,
	radius,
	size,
	disabled = false,
	className = '',
    textClassName='font-semibold text-h7 font-inter'
}: ButtonProps)=> {
  return (
    <Button
        id={id}
        radius={radius}
        size={size}
        variant={variant}
        color='primary'
        className={`${width} h-auto py-[0.875rem] font-medium border-1 ${
            variant === 'light'
                ? 'border-none hover:bg-[#fff] focus:outline-none'
                : ''
        }${className}`}
        isIconOnly={!!icon}
        isDisabled={disabled}
        onPress={onClick}
        startContent={!icon && startIcon}
        endContent={!icon && endIcon}
    >
        {icon || <p className={textClassName}>{text}</p>}
    </Button>
  )
}
