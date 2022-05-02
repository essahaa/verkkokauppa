import React from 'react';
import './header.scss';
import { MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
//import cart.png
const Header = () => {
	return (
		<div id="headerdiv" className="headerkuvat">
			<div id="jonnenvalinta">
				<Link to="/">
					<img
						id="logokuva"
						className="headerkuvas"
						src="https://i.imgur.com/yC6sUv2.png"
						alt="JonnenValinta"
					/>
				</Link>
			</div>
			{
				<MDBInput
					id="typeText"
					type="text"
					placeholder="Etsi tuotetta..."
				/>
			}


			<Link to="/ShoppingCart">
			<div className="headerkuvat">
				<img
					className="headerkuvas"
					id="cartkuva"
					src={'https://i.imgur.com/lW7ZRoX.png'}
					alt="cart"
				/>
			</div>
			</Link>
		</div>
	);
};
export default Header;
