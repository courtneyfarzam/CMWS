import Approach from '@/components/Approach/index';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Approach',
	description: 'This is Approach Page',
	// other metadata
};

const approach = () => {
	return (
		<Approach />
	)
};

export default approach;
