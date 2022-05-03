import './navbar.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

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
		<div className="button-column mt-5">
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
		</div>
	);
}
