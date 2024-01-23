import Treatments from '@/components/Treatments/index';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Treatments',
	description: 'This is Treatments Page',
	// other metadata
};

const treatments = () => {
	return (
		<>
		
		<Breadcrumb 
            pageName='Treatments'
            description='Here it is!'
        />
		<Treatments />

		</>
	)
};

export default treatments;
