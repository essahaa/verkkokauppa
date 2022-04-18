import React from 'react';
import Body from '../components/body';
import Navbar from '../components/navbar';


export default function Home() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Navbar url={URL}/>

			<Body></Body>
		</div>
	);
}
