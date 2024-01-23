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
								<a href='https://courtneyfarzam.netlify.app/'>
									Courtney Ashley Farzam
								</a>
							</p>
						</div>
					</div>

                    {/* The fun SVG returns */}
					<div>
						<span className='absolute left-0 top-0 z-[-1]'>
							<svg
								width='287'
								height='254'
								viewBox='0 0 287 254'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									opacity='0.1'
									d='M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z'
									fill='url(#paint0_linear_111:578)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_111:578'
										x1='-40.5'
										y1='117'
										x2='301.926'
										y2='-97.1485'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#4A6CF7' />
										<stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
									</linearGradient>
								</defs>
							</svg>
						</span>
						<span className='absolute right-0 top-0 z-[-1]'>
							<svg
								width='628'
								height='258'
								viewBox='0 0 628 258'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									opacity='0.1'
									d='M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z'
									fill='url(#paint0_linear_0:1)'
								/>
								<path
									opacity='0.1'
									d='M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z'
									fill='url(#paint1_linear_0:1)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_0:1'
										x1='644'
										y1='221'
										x2='429.946'
										y2='37.0429'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#4A6CF7' />
										<stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
									</linearGradient>
									<linearGradient
										id='paint1_linear_0:1'
										x1='18.3648'
										y1='166.016'
										x2='105.377'
										y2='32.3398'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#4A6CF7' />
										<stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
									</linearGradient>
								</defs>
							</svg>
						</span>
					</div>
				</footer>
			</>
		);
};

export default Footer;