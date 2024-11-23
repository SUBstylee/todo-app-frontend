import Image from 'next/image';
import { COLORS } from '@/constants/enums';
import { TaskFormProps } from '@/types/types';

const TaskForm: React.FC<TaskFormProps> = ({
	title,
	setTitle,
	selectedColor,
	setSelectedColor,
	handleSubmit,
	label,
	svgSrc,
}) => {
	return (
		<>
			<label
				style={{ color: '#4EA8DE' }}
				className='text-lg font-medium text-left w-full mb-4'>
				{label}
			</label>
			<input
				type='text'
				placeholder='Ex. Brush your teeth'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='w-full p-3 bg-black text-white border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
			/>

			<label
				style={{ color: '#4EA8DE' }}
				className='text-lg font-medium text-left w-full mt-6 mb-2'>
				Color
			</label>
			<div className='flex gap-4'>
				{COLORS.map((color) => (
					<button
						key={color}
						onClick={() =>
							setSelectedColor((prev) => (prev === color ? '#fff' : color))
						}
						style={{
							backgroundColor: color,
							border: selectedColor === color ? '2px solid white' : 'none',
						}}
						className='w-10 h-10 rounded-full'></button>
				))}
			</div>

			<button
				onClick={handleSubmit}
				className='w-full bg-blue-500 text-white rounded-md hover:bg-blue-400 px-6 py-3 transition flex items-center justify-center gap-2 mt-8'>
				<span>{label}</span>
				<Image
					src={svgSrc}
					alt='Add Task Icon'
					width={20}
					height={20}
					className='inline-block'
				/>
			</button>
		</>
	);
};

export default TaskForm;
