import Approach from '@/components/Approach/index';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Approach',
	description: 'This is Approach Page',
	// other metadata
};

const approach = () => {
	return (
		<>
			<Breadcrumb 
				pageName='My Approach' 
				description='Here it is!' 
			/>
			<Approach />
		</>
	);
};

export default approach;
