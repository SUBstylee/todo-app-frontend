'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import TaskForm from '@/components/TaskForm';
import BackButton from '@/components/BackButton';

const CreateTaskPage = () => {
	const [title, setTitle] = useState('');
	const [selectedColor, setSelectedColor] = useState<string>('#fff');
	const router = useRouter();

	const handleCreateTask = async () => {
		if (!title.trim()) {
			alert('Title is required!');
			return;
		}

		try {
			const response = await fetch('http://localhost:5001/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title,
					color: selectedColor,
					completedStatus: false,
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to create task.');
			}

			router.push('/');
		} catch (error) {
			console.error('Error creating task:', error);
			alert('An error occurred while creating the task.');
		}
	};

	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />

			<main className='w-full max-w-2xl flex flex-col items-center mt-12'>
				<BackButton />

				<TaskForm
					title={title}
					setTitle={setTitle}
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					handleSubmit={handleCreateTask}
					label='Add Task'
					svgSrc='addtask.svg'
				/>
			</main>
		</div>
	);
};

export default CreateTaskPage;
