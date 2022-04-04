import React from 'react';
import './header.scss';
import { MDBInput } from 'mdb-react-ui-kit';
//import cart.png
const Header = () => {
	return (
		<div id="headerdiv" className="headerkuvat">
			<div id="jonnenvalinta">
				<a href="../../pages/Home.js">
					{' '}
					<img
						id="logokuva"
						className="headerkuvas"
						src="/images/jonne1.png"
						alt="JonnenValinta"
					/>
				</a>
			</div>
			{
				<MDBInput
					id="typeText"
					type="text"
					placeholder="Etsi tuotetta..."
				/>
			}

			<div className="headerkuvat">
				<img
					className="headerkuvas"
					id="cartkuva"
					src={'/images/cart.png'}
					alt="cart"
				/>
			</div>
		</div>
	);
};
export default Header;
