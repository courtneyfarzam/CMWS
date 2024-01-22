import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const About = () => {
    const List = ({ text }: { text: string }) => (
			<p className='mb-5 flex items-center text-lg font-medium text-body-color'>
				<span className='mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-transparent text-primary'>
					✔️
				</span>
				{text}
			</p>
		);

    return (
			<section id='about' className='pt-16 md:pt-20 lg:pt-28'>
				<div className='container mt-10'>
					<div className='border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28'>
						<div className='mx-4 flex flex-wrap items-center'>
							<div className='w-full px-4 lg:w-1/2'>
								<SectionTitle
									title='Some About Me Stuff'
									paragraph='Some good stuff about good things. Text can be super fun yes yayyyyy'
									mb='44px'
								/>

								<div className='mb-12 max-w-[570px] lg:mb-0'>
									<div className='mx-[-12] flex flex-wrap'>
										<div className='w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2'>
											<List text='some text :) add more when you figure out what to list' />
										</div>
									</div>
								</div>
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

							<div className='w-full px-4 mt-20'>
								<div className='relative lg:mr-0'>
									<div className='mb-9'>
										<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
											More Stuff
										</h3>

										<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
											A little diddy about the More Stuff in bold 
										</p>
									</div>

									<div className='mb-9'>
										<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
											More Stuff
										</h3>

										<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
											A little diddy about the More Stuff in bold 
										</p>
									</div>

									<div className='mb-1'>
										<h3 className='mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl'>
											More Stuff
										</h3>

										<p className='text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed'>
											A little diddy about the More Stuff in bold 
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}

export default About;