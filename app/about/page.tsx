import AboutSection from '@/components/About/index';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description: 'This is About Page',
	// other metadata
};

const about = () => {
    return (
        <>
        
        <AboutSection />

        </>
    )
};

export default about;