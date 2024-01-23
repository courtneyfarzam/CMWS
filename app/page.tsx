import Hero from '@/components/Hero';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Leah Shanks',
	description: 'This is Home',
	// other metadata
};

export default function Home() {
	return (
		<>

		<Hero />

		</>
	);
}
