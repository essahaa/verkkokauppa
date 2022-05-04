import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function ProductDetail(props) {
	let { id } = useParams();

	const [productDetails, setProductDetails] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(URL + 'products/getproductwithid.php/' + id)
			.then((response) => {
				setProductDetails(response.data.products[0]);
				setLoading(false);
				console.log(response.data.products[0]);
			})
			.catch((error) => {
				setLoading(true);
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
	}, []);

	console.log(id);

	const addProductToCart = () => {
		const data = productDetails.id
		const cartItems = [...props.cart];
		cartItems.push(data);
		props.setCart(cartItems);

		alert('Tuote lisätty ostoskoriin');
	};

	return (
		<div
			className="vh-100"
			style={{ display: 'flex', justifyContent: 'space-between' }}
		>
			<div className="container ml-5 mt-5">
				<h1 className="text-left ms-5">{!loading && productDetails.name}</h1>
				<div className="row">
					<div className="col-md-4 mt-5">
						{!loading ? (
							<img
								src={productDetails.image}
								alt=""
								style={
									{
										width: '100%',
										height: '300px',
									}
								}
							></img>
						) : null}
					</div>
					<div className="col-md-4">
						<h3 className="my-3">Tuotekuvaus</h3>
						{!loading && productDetails.kuvaus}
						<h3 className="my-3">Ravintoarvot</h3>
						{!loading && productDetails.ravintoarvot}
						<h3 className="my-3">Ainesosat</h3>
						{!loading && productDetails.ainesosat}
					{/* 	<h3 className="my-3 mt-5">
							Hinta {!loading && productDetails.price}€/kpl
						</h3>
						{!loading && productDetails.aineosat} */}
						<h3 className="my-3 mt-5">Hinta {!loading && productDetails.price}€/kpl</h3>
						<Button
							onClick={addProductToCart}
							variant="outline-light"
							className="w-50"
						>
							Lisää ostoskoriin
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
