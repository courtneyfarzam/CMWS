import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const Approach = () => {

	return (
		<section id='approach' className='pt-16 md:pt-20 lg:pt-28'>
			<div className='container mt-10'>
				<div className='border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28'>
					<div className='mx-4 flex flex-wrap items-center'>
						<div className='w-full px-4 lg:w-1/2'>
							<SectionTitle
								title='My Approach'
								paragraph='Some good stuff about good things. Text can be super fun yes yayyyyy'
								mb='44px'
							/>
						</div>

						<div className='w-full px-4 lg:w-1/2'>
							<div className='relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0'>
								<Image
									src='/images/Funny-Headshot-Picture.webp'
									alt='funny headshot'
									fill
									className='drop-shadow-three mx-auto max-w-full lg:mr-0'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Approach;
