import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';


export default function ShoppingCart(props) {
	console.log(props.cart);

	const backendUrl = 'http://localhost/verkkokauppaBackEndi/';

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastname] = useState('');
	const [address, setAddress] = useState('');
	const [zip, setZip] = useState('');
	const [city, setCity] = useState('');



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



function order(e) {

	const json =JSON.stringify( {
		firstname: firstName,
		lname: lastName,
		address: address,
		zip: zip,
		city: city,
	});
		axios.post(backendUrl + 'order/save.php', json, {
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'

			}
			})
.then(() => {
empty();
	alert('Tilaus onnistui!');
}).catch(error => {
	alert(error.response === undefined ? error : error.response.data.error);
});
console.log(e.target.firstname);
	console.log(e.target.lastname);
	console.log(json)
}
console.log(firstName)

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
							objectFit: 'contain',
						}}
						src={product.image}
						alt="kuva"
					></img>
					<div>Tuote: {product.name} </div>|
					<div>Määrä: {cartItems[key]} </div>|
					<div>Hinta: {product.price * cartItems[key]}€</div>|{' '}
					<Button variant="outline-light" className="w-30">
						Poista ostoskorista
					</Button>
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
			
			<Form onSubmit= {order}>
			

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Etunimi</Form.Label>
					<Form.Control type="" placeholder="Etunimi" onChange={e => setFirstname(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Sukunimi</Form.Label>
					<Form.Control type="" placeholder="Sukunimi" onChange={e => setLastname(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Katuosoite</Form.Label>
					<Form.Control type="" required placeholder="Katuosoite"onChange={e => setAddress(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Kaupunki</Form.Label>
					<Form.Control type="" placeholder="Kaupunki"onChange={e => setZip(e.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Postinumero</Form.Label>
					<Form.Control type="" placeholder="Postinumero"onChange={e => setCity(e.target.value)} />
				</Form.Group>
			
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="outline-light" type="submit" className="w-30">
				Tilaa tuotteet
				</Button>

			</Form>
		</div>
	);
}

function empty() {
	throw new Error('Function not implemented.');
}

