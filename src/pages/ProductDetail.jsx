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

	const addProductToCart = (product) => {
		product = 'test';
		const cartItems = [...props.cart];
		cartItems.push(product);
		props.setCart(cartItems);
	};

	return (
		<div
			className="vh-100"
			style={{ display: 'flex', justifyContent: 'space-between' }}
		>
			<div className="container ms-5 me-5 mt-5">
				<h1 className="text-left ms-5">Tuotenimi</h1>
				<div className="row">
					<div className="col-md-4">
						{!loading ? (
							<img
								src={"https://www.battery.fi/media/1780/battery-no-calorie-peach_raspberry-33_cl_322x482.png?crop=Fns6Eqm2B6CT_CiA2ff_IUf42TiMyKhK6a2nC9B829dt9h6WLLc9DMPpLpOCHxAEHdTtbJZcwKVsK-shOw3DD5r5YSCdVZCeGCY5aXgbbyq5ml-2YyI5r_xVELPOQ16V"}
								alt=""
								style={
									{
										width: '100%',
										height: 'auto',
									}
								}
							></img>
						) : null}
					</div>
					<div className="col-md-4">
						<h3 className="my-3">Tuotekuvaus</h3>
						<p>Tuotekuvaus</p>
						<h3 className="my-3">Ravintoarvot</h3>
						<p> Ravintoarvot</p>
						<h3 className="my-3">Ainesosat</h3>
						<p> Ainesosat</p>
						<h3 className="my-3 mt-5">Hinta € / kpl</h3>
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
function setJonnes(data) {
	throw new Error('Function not implemented.');
}
