const Hero = () => {
    return (
			<>
				<section
					id='home'
					className='relative z-10 overflow-hidden bg-white pt-8 lg:pb-16 lg:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]'
				>
					<div className='container'>
						<div className='-mx-4 flex flex-wrap'>
							<div className='w-full px-4'>
								<div className='mx-auto max-w-[800px] text-center'>
									<h1 className='mb-5 text-3xl font-bold leading-tight text-black xs:mb-2 sm:text-4xl md:text-5xl'>
										There Is No <span className='text-primary'>Health</span>
										<br />
										Without <span className='text-primary'>Mental Health</span>
									</h1>

									<p className='mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl'>
										Here is some more information about how things work
										heeeeeere. Yeah you need to know so now ya know ok ok ok.
										Take a nap, think on it. The info is here.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
}

export default Hero;