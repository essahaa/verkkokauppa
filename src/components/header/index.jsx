import React from 'react';
import './header.scss';
import { Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import cart.png

function Header() {	
	const [search, setSearch] = useState("");

	function executeSearch(e) {
		if (e.charCode === 13) {
			e.preventDefault();
			Navigate('/search' + search);
		}
	};

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
			<div>
			<form className="form-inline my-2 my-lg-0">
				<input  
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyPress={(e) => executeSearch(e)}
				className="form-control mr-sm-2"
				type="search" 
                placeholder="Etsi tuotetta..." 
				aria-label="Search"/>
			</form>  
			</div>
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
