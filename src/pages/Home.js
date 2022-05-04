import React from 'react';
import Body from '../components/body';
import Navbar from '../components/navbar';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function Home() {

	const [filter, setFilter] = React.useState(0);

	return (
		<div id='containerDiv'
			style={{
				display: 'inline-flex',
				justifyContent: 'space-between',
				overflow: 'auto',
				height: '100%',
				
			}}
		>
			<Navbar url={URL} setFilter={setFilter}/>
			<Body url={URL} filter={filter} />
		</div>
	);
}
