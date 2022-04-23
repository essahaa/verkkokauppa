import React from 'react';
import Body from '../components/body';
import Navbar from '../components/navbar';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function Home() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				overflow: 'auto',
				height: '100%',
			}}
		>
			<Navbar url={URL} />

			<Body></Body>
		</div>
	);
}
