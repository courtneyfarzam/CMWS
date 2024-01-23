import Resources from '@/components/Resources/index';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Resources',
	description: 'This is Resources Page',
	// other metadata
};

const resources = () => {
	return (
		<>
		
		<Breadcrumb 
            pageName='Resources'
            description='Here it is!'
        />
		<Resources />

		
		</>
	)
};

export default resources;
