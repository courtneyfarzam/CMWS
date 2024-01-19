import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About',
	description: 'This is About Page',
	// other metadata
};

const about = () => {
    return (
        <div>About</div>
    )
};

export default about;