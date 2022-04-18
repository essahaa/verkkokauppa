import { Link } from 'react-router-dom';
import './navbar.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function Navbar({ url }) {
	const [categories, setGategories] = useState([]);

	useEffect(() => {
		console.log(url);
		axios
			.get(url + 'products/getcategories.php/')
			.then((response) => {
				const json = response.data;
				setGategories(json);
				console.log(json);
			})
			.catch((error) => {
				alert(
					error.response === undefined ? error : error.response.data.error
				);
			});
	}, []);
	//col-3 col-xs-3 col-sm-3 col-md-2 col-lg-1
	return (
		<div className="row">
			<Button variant="outline-light" className="col-1,">
				Dark
			</Button>
			<div className="nav w-25">
				<ul className="list">
					{categories.map((category) => (
						<li className="listItem">
							<Link
								className="links"
								to={'/products/' + category.id}
							>
								{category.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
