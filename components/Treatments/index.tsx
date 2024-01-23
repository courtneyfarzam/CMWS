import SectionTitle from '../Common/SectionTitle';

const Treatments = () => {
	const List = ({ text }: { text: string }) => (
		<p className='mb-5 flex items-center text-lg font-medium text-body-color'>
			<span className='mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-transparent text-primary'>
				✔️
			</span>
			{text}
		</p>
	);

	return (
		<section id='treatments' className='pt-16 md:pt-20 lg:pt-28'>
			<div className='container mt-20'>
				<div className='border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28'>
					<div className='mx-4 flex flex-wrap items-center'>
						<div className='w-full px-4 lg:w-1/2'>
							<SectionTitle
								title='Treatments'
								paragraph='Some good stuff about good things. Text can be super fun yes yayyyyy'
								mb='44px'
							/>
						</div>
					</div>

					<div className='flex flex-wrap'>
						<div className='w-full max-w-[570px] lg:mb-0 lg:w-1/2'>
							<div className='mx-[-12] flex flex-wrap'>
								<div className='w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2'>
									<List text='some text :) add more when you figure out what to list' />
								</div>
							</div>
						</div>

						<div className='w-full px-4 lg:w-1/2'>
							<div className='relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0'>
								<List text='some text :) add more when you figure out what to list' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Treatments;
