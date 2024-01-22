import Resources from '@/components/Resources/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Resources',
	description: 'This is Resources Page',
	// other metadata
};

const resources = () => {
	return <Resources />
};

export default resources;
