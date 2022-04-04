import React from 'react';
import './header.scss';
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
