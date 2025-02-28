interface Step {
	number?: number | string;
	label?: string;
	completed?: boolean;
}

interface HorizontalStepperProps {
	steps?: Step[];
}

export const Steppers = ({ steps }: HorizontalStepperProps) => {
	return (
		<div className='flex items-center w-full px-4'>
			{steps?.map((step, index) => (
				<div 
					key={step.number} 
					className={`flex items-center ${index === steps?.length - 1 ? 'justify-end' : 'w-full'}`}>
					{/* Step Circle */}
					<div className='flex flex-col items-center'>
						<div
							className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${step?.completed
								? 'bg-primary border-primary text-white'
								: steps?.find((s) => !s?.completed)?.number === step?.number
									? 'border-primary text-primary'
									: 'border-[#A1AEBE] text-[#465668]'
							}`}
						>
							{step?.completed ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									viewBox='0 0 24 24'
									fill='currentColor'
									role='presentation'
								>
									<path
										fillRule='evenodd'
										d='M9.707 16.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 14.586l8.293-8.293a1 1 0 011.414 1.414l-9 9z'
										clipRule='evenodd'
									/>
								</svg>
								) : steps?.find((s) => !s?.completed)?.number === step?.number ? (
                                    <div className='w-4 h-4 bg-primary rounded-full'></div>
                                ) : (
                                    <span className='font-medium text-h7'>{step?.number}</span>
                                )}
                            
						</div>

                        {/* Step Label */}
                        <div
							className={`mt-2 text-h7 font-medium  ${step?.completed || steps?.find((s) => !s?.completed)?.number === step?.number
								? 'text-primary '
								: 'text-[#465668]'
							}`}
						>
							{step?.label}
						</div>
						
					</div>

					{/* Step Line (only if not last step) */}
					{index < steps?.length - 1 && (
						<div className={`flex-grow h-0.5 m-4 mt-[-5px] ${step?.completed ? 'bg-primary' : 'bg-[#A1AEBE]'}`}></div>
					)}
				</div>
			))}
		</div>
	);
};
