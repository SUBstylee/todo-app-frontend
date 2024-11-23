import Image from 'next/image';
import Link from 'next/link';
import { TaskItemProps } from '@/types/types';

const TaskItem = ({ task, toggleCompletion, deleteTask }: TaskItemProps) => {
	return (
		<div
			key={task.id}
			className={`flex items-center justify-between p-4 rounded-md ${
				task.completedStatus
					? 'bg-gray-800 text-gray-500'
					: 'bg-gray-700 text-white'
			}`}>
			<div className='flex items-center gap-4 flex-1'>
				<label
					className='relative w-6 h-6 rounded-full border-2 flex justify-center items-center shrink-0'
					style={{
						borderColor: task.color || 'white',
						backgroundColor: task.completedStatus
							? task.color || 'white'
							: 'transparent',
					}}>
					<input
						type='checkbox'
						checked={task.completedStatus}
						onChange={() => toggleCompletion(task.id)}
						className='opacity-0 absolute w-full h-full cursor-pointer'
					/>
					{task.completedStatus && (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill={task.color === '#fff' || !task.color ? 'black' : 'white'}
							className='w-4 h-4'>
							<path
								fillRule='evenodd'
								d='M20.292 6.292a1 1 0 01.083 1.32l-.083.094-11 11a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L9 16.585l10.292-10.293a1 1 0 011.414 0z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				</label>
				<span
					className={`${
						task.completedStatus ? 'line-through text-gray-500' : ''
					} break-words flex-1`}>
					<Link href={`/edit/${task.id}`} className='hover:underline'>
						{task.title}
					</Link>
				</span>
			</div>
			<button
				onClick={() => deleteTask(task.id)}
				className='text-gray-400 hover:text-red-500 shrink-0 ml-8'>
				<Image src='/trash.svg' alt='Delete Task' width={20} height={20} />
			</button>
		</div>
	);
};

export default TaskItem;
