import Image from 'next/image';

const Header = () => {
	return (
		<header
			className='w-full flex flex-col items-center p-8'
			style={{ backgroundColor: '#0d0d0d' }}>
			<h1 className='text-4xl font-bold text-center mb-6'>
				<span role='img' aria-label='Rocket'>
					<Image
						src='/rocket.svg'
						alt='Todo Rocket Icon'
						width={25}
						height={25}
						className='inline-block'
						style={{ width: 'auto', height: 'auto' }}
					/>
				</span>{' '}
				<span style={{ color: '#4EA8DE' }}>Todo</span>{' '}
				<span style={{ color: '#5E60CE' }}>App</span>
			</h1>
		</header>
	);
};

export default Header;
