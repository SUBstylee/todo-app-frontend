import Image from 'next/image';
import { SaveButtonProps } from '@/types/types';

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, label }) => {
	return (
		<button
			onClick={onClick}
			className='w-full bg-blue-500 text-white rounded-md hover:bg-blue-400 px-6 py-3 transition flex items-center justify-center gap-2 mt-8'>
			<span>{label}</span>
			<Image
				src='/checkmark.svg'
				alt='Save Task Checkmark Icon'
				width={20}
				height={20}
				className='inline-block'
			/>
		</button>
	);
};

export default SaveButton;
