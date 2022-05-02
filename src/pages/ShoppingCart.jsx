import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function ShoppingCart(props) {
	console.log(props.cart);

	const backendUrl = 'http://localhost/verkkokauppaBackEndi/';

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(backendUrl + 'products/getallproducts.php')
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
				setLoading(false);
			})
			.catch((error) => {
				setLoading(true);
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
	}, [backendUrl]);

	const mapIdsToProducts = () => {
		const count = {};
		props.cart.forEach((element) => {
			count[element] = (count[element] || 0) + 1;
		});
		console.log(count);

		return count;
	};

	const renderCartItems = () => {
		const cartItems = mapIdsToProducts();
		const cartItemsArray = [];
		for (const key in cartItems) {
			console.log(key);
			const product = products.find(
				(product) => product.id === Number(key)
			);
			console.log(product);
			cartItemsArray.push(
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: '1em',
						border: '1px solid black',
						borderRadius: '5px',
						padding: '1em',
						width: '50em',
					}}
					key={key}
				>
					<img
						style={{
							width: '100px',
							height: '100px',
						}}
						src={product.image}
						alt="kuva"
					></img>
					<div>Tuote: {product.name} </div>|
					<div>Määrä: {cartItems[key]} </div>|
					<div>Hinta: {product.price * cartItems[key]}€</div>
					| <Button variant="outline-light" className="w-30">Poista ostoskorista</Button>
				</div>
			);
		}

		return cartItemsArray;
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1em',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '1em',
				}}
			>
				{!loading ? renderCartItems() : <div>Loading...</div>}
			</div>
			<Button variant="outline-light" className="w-30">
				Tilaa tuotteet
			</Button>
		</div>
	);
}
