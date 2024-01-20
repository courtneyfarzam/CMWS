import Link from 'next/link';

const Hero = () => {
    return (
        <>
        
        <section id='home'>
            <div className='container'>
                <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4'>
                        <div className='mx-auto max-w-[800px] text-center'>
                            <h1 className=''>Some Heading For The About Section</h1>

                            <p className='about-p'>
                                Here is some more information about how things work heeeeeere. Yeah you need to know so now ya know ok ok ok. Take a nap, think on it. The info is here.
                            </p>

                            <Link
                                href='#'
                                className='rounded-lg'
                            >
                                Link Button!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Hero;