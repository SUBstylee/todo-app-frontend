import { useRouter } from 'next/navigation';
import Image from 'next/image';

const BackButton: React.FC = () => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push('/')}
			className='self-start text-blue-500 mb-6'>
			<Image src='/arrow-left.svg' height={14} width={14} alt='Go Back' />
		</button>
	);
};

export default BackButton;
