// I initially used local storage to handle the tasks while building out the front end. I will leave this file here just to show how this was done.
import { Task } from '@/types/types';

// Retrieve tasks from localStorage
export const getTasks = (): Task[] => {
	const tasks = localStorage.getItem('tasks');
	return tasks ? JSON.parse(tasks) : [];
};

// Save tasks to localStorage
export const saveTasks = (tasks: Task[]): void => {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Create a new task
export const createTask = (
	task: Omit<Task, 'id' | 'completedStatus'>,
): void => {
	const tasks = getTasks();
	tasks.push({ ...task, id: Date.now(), completedStatus: false });
	saveTasks(tasks);
};

// Update an existing task
export const updateTask = (id: number, updatedTask: Partial<Task>): void => {
	const tasks = getTasks();
	const index = tasks.findIndex((task) => task.id === id);
	if (index !== -1) {
		tasks[index] = { ...tasks[index], ...updatedTask };
		saveTasks(tasks);
	}
};

// Delete a task
export const deleteTask = (id: number): void => {
	const tasks = getTasks().filter((task) => task.id !== id);
	saveTasks(tasks);
};
