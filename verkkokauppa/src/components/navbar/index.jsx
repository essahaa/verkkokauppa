import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
	return (
		<div className="row">
			<div className="nav col-3 col-xs-3 col-sm-3 col-md-2 col-lg-1">
				<ul className="list">
					<li className="listItem">
						{/* 	<a href="#" className="navlink">
									Etusivu
								</a> */}
						<Link
							className="links"
							to="/verkkokauppa/src/pages/Home.js"
						>
							Etusivu
						</Link>
					</li>
					<li className="listItem">
						{/* 	<a href="#" className="navlink">
									Etusivu
								</a> */}
						<Link
							className="links"
							to="/verkkokauppa/src/pages/Products.js"
						>
							Tuotteet
						</Link>
					</li>
					<li className="listItem">
						<a href="#" className="navlink">
							Etusivu
						</a>
					</li>
					<li className="listItem">
						<a href="#" className="navlink">
							Etusivu
						</a>
					</li>
					<li className="listItem">
						<a href="#" className="navlink">
							Etusivu
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Navbar;
