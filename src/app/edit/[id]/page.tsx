'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import InputField from '@/components/InputField';
import ColorPicker from '@/components/ColorPicker';
import BackButton from '@/components/BackButton';
import SaveButton from '@/components/SaveButton';
import Header from '@/components/Header';

const EditTaskPage = () => {
	const router = useRouter();
	const params = useParams();
	const taskId = Number(params.id);

	const [title, setTitle] = useState('');
	const [selectedColor, setSelectedColor] = useState<string>('#fff');

	useEffect(() => {
		if (isNaN(taskId)) {
			router.push('/');
			return;
		}

		const fetchTask = async () => {
			try {
				const response = await fetch(`http://localhost:5001/tasks/${taskId}`);
				if (!response.ok) {
					throw new Error('Task not found');
				}
				const task = await response.json();
				setTitle(task.title);
				setSelectedColor(task.color || '#fff');
			} catch (error) {
				console.error(error);
				router.push('/');
			}
		};

		fetchTask();
	}, [taskId, router]);

	const handleSaveTask = async () => {
		if (!title.trim()) {
			alert('Title is required!');
			return;
		}

		try {
			const response = await fetch(`http://localhost:5001/tasks/${taskId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, color: selectedColor }),
			});

			if (!response.ok) {
				throw new Error('Failed to save task');
			}

			router.push('/');
		} catch (error) {
			console.error(error);
			alert('An error occurred while saving the task');
		}
	};

	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<main className='w-full max-w-2xl flex flex-col items-center mt-12'>
				<BackButton />
				<InputField
					label='Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Ex. Brush your teeth'
				/>
				<label className='text-lg font-medium text-left w-full mt-6 mb-2'>
					Color
				</label>
				<ColorPicker
					selectedColor={selectedColor}
					onColorChange={setSelectedColor}
				/>
				<SaveButton onClick={handleSaveTask} label='Save' />
			</main>
		</div>
	);
};

export default EditTaskPage;
