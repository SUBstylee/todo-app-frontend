import { InputFieldProps } from '@/types/types';

const InputField: React.FC<InputFieldProps> = ({
	label,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<div className='w-full mb-4'>
			<label className='text-lg font-medium text-left'>{label}</label>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className='w-full p-3 bg-black text-white border border-gray-500 rounded-md focus:outline-none focus:ring focus:ring-blue-500'
			/>
		</div>
	);
};

export default InputField;
