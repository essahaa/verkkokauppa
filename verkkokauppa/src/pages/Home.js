import React from 'react';
import Body from '../components/body';
import Navbar from '../components/navbar';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function home() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Navbar url={URL} />

			<Body url={URL}></Body>
		</div>
	);
}
