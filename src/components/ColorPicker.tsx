import { COLORS } from '@/constants/enums';
import { ColorPickerProps } from '@/types/types';

const ColorPicker: React.FC<ColorPickerProps> = ({
	selectedColor,
	onColorChange,
}) => {
	return (
		<div className='flex gap-4 mb-6'>
			{COLORS.map((color) => (
				<button
					key={color}
					onClick={() => onColorChange(color)} // Use onColorChange here
					style={{
						backgroundColor: color,
						border: selectedColor === color ? '2px solid white' : 'none',
					}}
					className='w-10 h-10 rounded-full'></button>
			))}
		</div>
	);
};

export default ColorPicker;
