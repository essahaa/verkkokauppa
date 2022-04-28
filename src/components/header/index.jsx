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
						src="jonne1.png"
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
					src={'cart.png'}
					alt="cart"
				/>
			</div>
			</Link>
		</div>
	);
};
export default Header;
