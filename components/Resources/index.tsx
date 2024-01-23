import SectionTitle from '../Common/SectionTitle';

const Resources = () => {
	const List = ({ text }: { text: string }) => (
		<p className='mb-5 flex items-center text-lg font-medium text-body-color'>
			<span className='mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-transparent text-primary'>
				✔️
			</span>
			{text}
		</p>
	);

	return (
		<section id='resources' className='pt-16 md:pt-20 lg:pt-28'>
			<div className='container mt-20'>
				<div className='border-b border-body-color/[.15] pb-16 md:pb-20 lg:pb-28'>
					<div className='mx-4 flex flex-wrap items-center'>
						<div className='w-full px-4 lg:w-1/2'>
							<SectionTitle
								title='Resources'
								paragraph='Some good stuff about good things. Text can be super fun yes yayyyyy'
								mb='44px'
							/>
						</div>
					</div>

					<div className='flex flex-wrap'>
						<div className='w-full lg:mb-0'>
							<div className='mx-[-12] flex flex-wrap'>
								<div className='w-1/2 px-3'>
									<List text='some text :) add more when you figure out what to list' />
								</div>
								
                                <div className='w-1/2 px-3'>
                                    <List text='some text :) add more when you figure out what to list' />
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resources;
