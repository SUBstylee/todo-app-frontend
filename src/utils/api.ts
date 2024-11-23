export const getTasks = async () => {
	const response = await fetch('http://localhost:5001/api/tasks');
	return response.json();
};

export const createTask = async (task: { title: string; color: string }) => {
	const response = await fetch('http://localhost:5001/api/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(task),
	});
	return response.json();
};

export const updateTask = async (
	id: number,
	updatedTask: { title: string; color: string; completedStatus: boolean },
) => {
	const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updatedTask),
	});
	return response.json();
};

export const deleteTask = async (id: number) => {
	const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
		method: 'DELETE',
	});
	return response.json();
};
