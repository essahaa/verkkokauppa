import { Link } from 'react-router-dom';
import './navbar.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
export default function Navbar({ url }) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		console.log(url);
		axios
			.get(url + 'products/getcategories.php')
			.then((response) => {
				const json = response.data;
				setCategories(json);
				console.log(json);
			})
			.catch((error) => {
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
	}, [url]);
	return (
		<div className="button-column">
			{categories.map((category) => (
				<Link
					key={category.id}
					className="links"
					to={'/products/' + category.id}
				>
					<Button variant="outline-light" className="w-100">
						{category.name}
					</Button>
				</Link>
			))}
		</div>
	);
}
