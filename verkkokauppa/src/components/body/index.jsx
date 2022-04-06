import React, { useState,useEffect } from 'react';
import './body.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


export default function Products({url}) {
	const [categoryName, setCategoryName] = useState('');
	const [products, setProducts] = useState([]);

	let params = useParams();
	
	useEffect(() => {
		axios.get(url + 'products/getproducts.php/' + params.categoryId)
		.then((response) => {
			const json = response.data;
			setCategoryName(json.category);
			setProducts(json.products);
		}).catch(error => {
			alert(error.response === undefined ? error : error.response.data.error);
		})
	}, [params])

	return (
		<div className="container">
			<div className="col-9 col-xs-9 col-sm-9 col-md-10 col-lg-11 row">
				<h2>Category {categoryName}</h2>
				<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
					<div className="card">
						<img
							src={'/images/battery.png'}
							className="card-img-top"
							alt="..."
						/>
						{products.map(product => (
						<div className="card-body" key={product.id}>
							{product.name}
						</div>
						))}
				</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
}
