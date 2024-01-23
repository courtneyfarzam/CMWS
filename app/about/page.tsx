import AboutSection from '@/components/About/index';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description: 'This is About Page',
	// other metadata
};

const about = () => {
    return (
        <>
        
        <Breadcrumb 
            pageName='About Me'
            description='Here it is!'
        />
        <AboutSection />

        </>
    )
};

export default about;