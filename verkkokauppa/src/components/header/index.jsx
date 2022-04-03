import React from 'react';
import './header.scss';
//import logo from './logo.svg';
const Header = () => {
	return (
		<div id="headerdiv" className="headerkuvat">
			<div id="jonnenvalinta">
				<img
					id="logokuva"
					className="headerkuvas"
					src="/images/jonne1.png"
					alt="JonnenValinta"
				/>
			</div>
			<div className="headerkuvat">
				<img
					className="headerkuvas"
					id="cartkuva"
					src={'images/cart.png'}
					alt="cart"
				/>
			</div>
		</div>
	);
};
export default Header;
