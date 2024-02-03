'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import navData from './navData'

const Header = () => {
    // Hamburger Toggler
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen)
    }

    // Sticky Nav
    const [sticky, setSticky] = useState(false);

    const stickyNavbarHandler = () => {
        if (window.scrollY >= 80) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {window.addEventListener('scroll', stickyNavbarHandler)})

    const usePathName = usePathname();

    return (
			<>
				<div className='container flex items-center lg:justify-center xl:justify-center'>
					<div className='nav-logo'>
						<Link href='/' className='header-logo block w-full py-3'>
							<h1 className='mb-5 text-xl text-bold text-black sm:text-2xl md:text-5xl'>
								CMWS
							</h1>
						</Link>
					</div>
				</div>
				<header
					className={`header z-40 flex flex-col w-full items-center
                ${
									sticky
										? 'fixed z-[9999] top-0 left-0 bg-white !bg-opacity-30 shadow-sticky backdrop-blur-md transition ease-in'
										: 'absolute bg-transparent'
								}
                `}
				>
					{/* Navbar */}
					<div className='container'>
						<div className='w-full -mx-4'>
							<div className='flex items-center justify-center'>
								{/* Navbar Mobile Menu Button */}
								<button
									onClick={navbarToggleHandler}
									id='navbarToggler'
									aria-label='Mobile Menu'
									className='absolute right-1 -top-12 block translate-y-[-50%] rounded-lg px-2 py-[6px] ring-primary focus:ring-2 lg:hidden'
								>
									{/* Hamburger Lines with Animation */}
									<span
										className={`
                                            relative block my-1.5 w-[30px] h-0.5 bg-black transition-all duration-300 
                                            ${navbarOpen ? 'top-[7px] rotate-45' : ' '}
                                        `}
									/>
									<span
										className={`
                                            relative block my-1.5 w-[30px] h-0.5 bg-black transition-all duration-300
                                            ${navbarOpen ? 'opacity-0' : ' '}
                                        `}
									/>{' '}
									<span
										className={`
                                            relative block my-1.5 w-[30px] h-0.5 bg-black transition-all duration-300
                                            ${navbarOpen ? 'top-[-8px] -rotate-45' : ' '}
                                        `}
									/>
								</button>

								<nav
									id='navbarCollapse'
									className={`
                                        navbar absolute right-0 z-30 px-6 py-4 w-[250px] rounded border-[.5px] border-body-color/50 bg-white duration-300 lg:visible lg:opacity-100 lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0
                                        ${
																					navbarOpen
																						? 'visibility top-full opacity-100'
																						: 'invisible top-[120%] opacity-0'
																				}
                                    `}
								>
									{/* Actual Nav Links */}
									<ul className='block lg:flex lg:space-x-12'>
										{navData.map((navItem, index) => (
											<li key={index} className='group relative'>
												{navItem.path ? (
													<Link
														href={navItem.path}
														className={`
                                                    flex py-2 text-base
                                                    lg:mr-0 lg:inline-flex lg:px-0 lg:py-6
                                                    ${
																											usePathName ===
																											navItem.path
																												? 'text-primary'
																												: 'text-dark hover:text-primary'
																										}
                                                    `}
													>
														{navItem.title}
													</Link>
												) : (
													<>
														<p>👀</p>
													</>
												)}
											</li>
										))}
										<li className='group relative'>
											<Link
												href='https://leah-shanks.clientsecure.me/'
												className='ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-lg bg-primary px-8 py-2 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-6 lg:px-0 xl:px-9
                                                flex-1 lg:mr-0 lg:inline-flex  lg:py-6'
											>
												Schedule
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						{/* Make Appointment Button */}
						<div className='flex items-center pr-16 lg:pr-0'>
							<Link
								href='https://leah-shanks.clientsecure.me/'
								className='ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 lg:px-0 xl:px-9'
							>
								Schedule
							</Link>
						</div>
					</div>
				</header>
			</>
		);
}

export default Header;
