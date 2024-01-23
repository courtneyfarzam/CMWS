import Contact from '@/components/Contact/index';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact',
	description: 'This is Contact Page',
	// other metadata
};

const contact = () => {
	return (
		<>
			<Breadcrumb 
				pageName='Contact' 
				description='Here it is!' 
			/>
			<Contact />
		</>
	);
};

export default contact;
