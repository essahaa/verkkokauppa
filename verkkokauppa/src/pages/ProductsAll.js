import React, {useState,useEffect} from 'react';
import axios from 'axios';


export default function AllProducts({url,addToCart}) {


	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		axios.get(url + 'products/getallproducts.php')
		.then((response) => {
			const json = response.data;
			console.log(json);
			setProducts(json.products);
		}).catch(error => {
			alert(error.response === undefined ? error : error.response.data.error);
		})
	}, [url])




return (

<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
	{products.map(product => (
	<div className="card">
		
		<img
			src={url + "images/" + product.image}
			className="card-img-top"
			alt="..."
		/>
		<div className="card-body">
			
			<h5 className="card-title" key={product.id}>{product.name}</h5>
		
			<a href="#" className="btn btn-primary" type='button' onClick={e => addToCart(product)} >
				Add to cart
			</a>
		</div>
	</div>
		))}
</div>

)}