import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../components/navbar';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function ProductDetail(props) {

    const addProductToCart = (product) => {
        product = "test"
        const cartItems = [...props.cart]
        cartItems.push(product)
        props.setCart(cartItems)
    }


	return (
		<div
			className="vh-100"
			style={{ display: 'flex', justifyContent: 'space-between' }}
		>
			<Navbar url={URL} />
			<div className="container ms-5 me-5 mt-5">
				<h1 className="text-left ms-5">Tuotenimi</h1>
				<div className="row">
					<div className="col-md-4">
						<img
							className="img-fluid"
							src={'/images/battery.png'}
							alt=""
						></img>
					</div>
					<div className="col-md-4">
						<h3 className="my-3">Tuotekuvaus</h3>
						<p>Tuotekuvaus</p>
						<h3 className="my-3">Ravintoarvot</h3>
						<p> Ravintoarvot</p>
						<h3 className="my-3">Ainesosat</h3>
						<p> Ainesosat</p>
						<h3 className="my-3 mt-5">Hinta € / kpl</h3>
						<Button onClick={addProductToCart} variant="outline-light" className="w-50">
							Lisää ostoskoriin
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
