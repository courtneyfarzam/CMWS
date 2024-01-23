'use client';

import { useForm, ValidationError } from '@formspree/react';

// HEY YOU! Dont forget: formspree account needs to be created to complete this. Placeholders for now.
const Contact = () => {
    const [state, handleSubmit] = useForm('xpzvqqvb');

    if(state.succeeded) {
        return <p>Message Sent!</p>
    }

    return (
			<section id='contact' className='overflow-hidden py-16 md:py-20 lg:py-28'>
				<div className='container'>
					<div className='-mx-4 flex flex-wrap'>
						<div className='w-1/2 px-4 mx-auto'>
							<div className='shadow-three mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]'>
								<h2 className='mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl'>
									Contact Me
								</h2>

								<p className='mb-12 text-base font-medium text-body-color'>
									I will get back to you ASAP!
								</p>

								<form onSubmit={handleSubmit}>
									<div className='-mx-4 flex flex-wrap'>
										<div className='w-full px-4 md:w-1/2'>
											<div className='mb-8'>
												<label
													htmlFor='name'
													className='mb-3 block text-sm font-medium text-dark'
												>
													Your Name
												</label>

												<input
													type='text'
													placeholder='Enter Your Name'
													className='border-stroke rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary'
												/>
											</div>
										</div>

										<div className='w-full px-4 md:w-1/2'>
											<div className='mb-8'>
												<label
													htmlFor='email'
													className='mb-3 block text-sm font-medium text-dark'
												>
													Your Email
												</label>

												<input
													id='email'
													type='email'
													name='email'
													placeholder='Enter Your Email'
													className='border-stroke rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary'
												/>

												<ValidationError
													prefix='Email'
													field='email'
													errors={state.errors}
												/>
											</div>
										</div>

										<div className='w-full px-4'>
											<div className='mb-8'>
												<label
													htmlFor='message'
													className='mb-3 block text-sm font-medium text-dark'
												>
													Your Message
												</label>

												<textarea
													id='message'
													name='message'
													rows={5}
													placeholder='Enter Your Message'
													className='border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary'
												/>

												<ValidationError
													prefix='Message'
													field='message'
													errors={state.errors}
												/>
											</div>
										</div>

										<div className='w-full px-4'>
											<button
												type='submit'
												disabled={state.submitting}
												className='shadow-submit rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90'
											>
												Send
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}

export default Contact;