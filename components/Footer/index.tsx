'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
			<>
				<footer className='relative z-10 bg-white pt-16 md:pt-20 lg:pt-12'>
					<div className='container'>
						<div className='-mx-4 flex flex-wrap justify-between m:m-auto sm:'>
							<div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12'>
								<div className='mb-12 max-w-[360px]'>
									<Link href='/' className='mb-8 inline-block'>
										<Image
											src='/images/placeholderLogo.png'
											alt='logo'
											className='w-full'
											width={100}
											height={70}
										/>
									</Link>

									<p className='mb-9 text-base leading-relaxed text-body-color'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Integer lobortis.
									</p>

									{/* Social Icons Here If Wanted */}
								</div>
							</div>

							<div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12'>
								<div className=''>
									<h2 className='mb-10 text-xl font-bold text-black'>
										Leah Shanks, LPC-MHSP
									</h2>

									<div className='flex flex-col'>
										<p className='mb-2 text-base text-body-color leading-tight'>
											Lebanon Heath Care Center
										</p>
										<p className='mb-2 text-base text-body-color leading-tight'>
											1123 N Castle Heights Ave. Suite G
										</p>
										<p className='mb-2 text-base text-body-color leading-tight'>
											Lebanon, TN 37087
										</p>
										<p className='mb-2 text-base text-body-color leading-tight'>
											865-591-5949
										</p>
									</div>
								</div>
							</div>
						</div>
                        
                        <div className='h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent' />

                        <div className='py-5'>
                            <p className='text-center text-sm text-body-color'>
                                Made with 💖 and Next.js by{' '}
                                <a href='https://courtneyfarzam.netlify.app/'>Courtney Ashley Farzam</a>
                            </p>
                        </div>
					</div>
				</footer>
			</>
		);
};

export default Footer;