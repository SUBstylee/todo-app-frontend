export interface Task {
	id: number;
	title: string;
	completedStatus: boolean;
	color?: string;
}

export interface ColorPickerProps {
	selectedColor: string;
	onColorChange: (color: string) => void; // Ensure the prop is included here
}

export interface InputFieldProps {
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

export interface SaveButtonProps {
	onClick: () => void;
	label: string;
}

export interface TaskFormProps {
	title: string;
	setTitle: (title: string) => void;
	selectedColor: string;
	setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
	label: string;
	svgSrc: string;
	handleSubmit: () => void;
}

export interface TaskItemProps {
	task: Task;
	toggleCompletion: (id: number) => void;
	deleteTask: (id: number) => void;
}

export interface TaskListProps {
	tasks: Task[];
	toggleCompletion: (id: number) => void;
	deleteTask: (id: number) => void;
}
