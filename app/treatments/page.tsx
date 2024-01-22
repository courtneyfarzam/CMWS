import Treatments from '@/components/Treatments/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Treatments',
	description: 'This is Treatments Page',
	// other metadata
};

const treatments = () => {
	return <Treatments />
};

export default treatments;
