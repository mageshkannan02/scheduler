import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@heroui/react';
import React from 'react';

interface DialogModalProps {
	id?: string;
	isOpen: boolean;
	onClose: () => void;
	title?: string | null;
    startIconHeader?: React.ReactNode;
	bodyContent?: React.ReactNode;
	footerButtons?: React.ReactNode;
	customCloseButton?: React.ReactNode;
	closeButtonId?: string;
	size?:
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| 'full';
	customWidth?: string | number;
	customHeight?: string | number;
	bodyClassName?: string;
	footerClassName?: string;
	modalBackgroundClass?: string;
	titleStyle?: string;
	modalClassName?: string;
	modalHeaderClassName?: string;
	customBackdropStyles?: string;
	backdrop?: 'opaque' | 'blur' | 'transparent';
	hideCloseButton?: boolean;
	notificationCount?: string | number;
	countStyle?: string;
	headerID?: string;
}

export const DialogModal: React.FC<DialogModalProps> = ({
	id,
	headerID,
	isOpen = false,
	onClose = () => false,
	notificationCount,
	title = '',
    startIconHeader,
	bodyContent,
	footerButtons,
	bodyClassName = '',
	footerClassName = 'flex justify-end gap-3 px-4 py-2 md:px-6 md:py-4',
	modalClassName = 'rounded-2xl border-0',
	modalHeaderClassName = 'flex flex-row gap-1 justify-between items-center',
	modalBackgroundClass = 'bg-[#FFF]',
	customBackdropStyles = '',
	titleStyle = 'text-body1 font-semibold text-foreground-900 flex items-center justify-center gap-2',
	countStyle = 'bg-[#F7F9FF] text-footnote font-extraBold text-primary-500 px-[5px] rounded-[1000px]',
	size = 'md',
	customWidth,
	customHeight,
	customCloseButton,
	closeButtonId,
	backdrop = 'opaque',
	hideCloseButton = false,
}) => {
	const targetRef = React.useRef(null);

	// Determine modal width and height
	let modalSize = size;
	let width = customWidth;
	let height = customHeight;

	if (customWidth && customHeight) {
		modalSize = 'md';
		width = customWidth;
		height = customHeight;
	} else if (size) {
		width = undefined;
		height = undefined;
	}

	return (
		<Modal
			data-testid={id}
			id={id}
			ref={targetRef}
			isOpen={isOpen}
			size={modalSize}
			onClose={onClose}
			backdrop={backdrop}
			hideCloseButton={hideCloseButton || !!customCloseButton}
			className={`shadow-none ${modalClassName} ${modalBackgroundClass} ${customWidth && customHeight ? 'max-w-none' : ''}`}
			style={{ maxWidth: width, height }}
			classNames={{
				backdrop: customBackdropStyles,
			}}
			scrollBehavior='inside'
		>
			<ModalContent id='fdfhgthhhh'>
				{(onClose) => (
					<>
						{title && (
							<ModalHeader
								className={`${modalHeaderClassName}`}
							>
                                {startIconHeader ? <div className='flex gap-4'>
                                    {startIconHeader}
                                    <p className={titleStyle} id={headerID}>
									{title}
									<span className={countStyle}>{notificationCount}</span>
								</p>
                                </div> :
								<p className={titleStyle} id={headerID}>
									{title}
									<span className={countStyle}>{notificationCount}</span>
								</p>}
								{customCloseButton && (
									<span
										onClick={onClose}
										id={closeButtonId}
										className='cursor-pointer'
									>
										{customCloseButton}
									</span>
								)}
							</ModalHeader>
						)}
						{bodyContent && (
							<ModalBody className={bodyClassName}>{bodyContent}</ModalBody>
						)}
						{footerButtons && (
							<ModalFooter className={footerClassName}>{footerButtons}</ModalFooter>
						)}
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

