import './navbar.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get(props.url + 'products/getcategories.php')
			.then((response) => {
				console.log(response.data);
				setCategories(response.data);
			})
			.catch((error) => {
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="button-column">
			<Button
				onClick={() => props.setFilter(0)}
				variant="outline-light"
				className="w-100"
			>
				Kaikki
			</Button>
			{categories.map((category) => (
				<Button
					key={category.id}
					variant="outline-light"
					className="w-100"
					onClick={() => props.setFilter(category.id)}
				>
					{category.name}
				</Button>
			))}

			<Link to="/AdminPage">
				<Button
					variant="outline-light"
					className="w-100"
				>
					Admin
				</Button>
			</Link>

			<Link to="/ProductAdd">
				<Button
					variant="outline-light"
					className="w-100"
				>
					addproducts
				</Button>
			</Link>
		</div>
	);
}
