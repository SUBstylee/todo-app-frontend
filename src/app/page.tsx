'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TaskList from '@/components/TaskList';
import Header from '@/components/Header';
import { Task } from '../types/types';

export default function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const completedTasks = tasks.filter((task) => task.completedStatus).length;

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await fetch('http://localhost:5001/tasks');
				if (response.ok) {
					const data: Task[] = await response.json();
					setTasks(data);
				} else {
					console.error('Failed to fetch tasks');
				}
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		};
		fetchTasks();
	}, []);

	const deleteTask = async (id: number): Promise<void> => {
		try {
			const response = await fetch(`http://localhost:5001/tasks/${id}`, {
				method: 'DELETE',
			});
			if (response.ok) {
				setTasks((prev) => prev.filter((task) => task.id !== id));
			} else {
				console.error('Failed to delete task');
			}
		} catch (error) {
			console.error('Error deleting task:', error);
		}
	};

	const toggleCompletion = async (id: number): Promise<void> => {
		const task = tasks.find((task) => task.id === id);
		if (!task) return;

		try {
			const updatedTask = { ...task, completedStatus: !task.completedStatus };
			const response = await fetch(`http://localhost:5001/tasks/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(updatedTask),
			});
			if (response.ok) {
				setTasks((prev) =>
					prev.map((task) => (task.id === id ? updatedTask : task)),
				);
			} else {
				console.error('Failed to update task');
			}
		} catch (error) {
			console.error('Error updating task:', error);
		}
	};

	return (
		<div className='min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center'>
			<Header />
			<div className='w-full max-w-2xl flex flex-col relative'>
				<Link href='/create'>
					<button className='w-full bg-blue-500 text-white rounded-md hover:bg-blue-400 px-6 py-3 transition flex items-center justify-center gap-2 -mt-6'>
						<span>Create Task</span>
						<Image
							src='/addtask.svg'
							alt='Create Task Plus Icon'
							width={20}
							height={20}
							className='inline-block'
						/>
					</button>
				</Link>

				<div className='flex justify-between w-full mt-14 text-gray-400'>
					<div style={{ color: '#4EA8DE' }}>
						Tasks:{' '}
						<span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
							{tasks.length}
						</span>
					</div>
					<div style={{ color: '#5E60CE' }}>
						Completed:{' '}
						<span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
							{tasks.length ? `${completedTasks} of ${tasks.length}` : 0}
						</span>
					</div>
				</div>
			</div>

			<main className='w-full max-w-2xl flex flex-col gap-4 mt-6'>
				<TaskList
					tasks={tasks}
					toggleCompletion={toggleCompletion}
					deleteTask={deleteTask}
				/>
			</main>
		</div>
	);
}
