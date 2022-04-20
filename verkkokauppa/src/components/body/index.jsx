import './body.scss';
import { Routes, Route } from 'react-router-dom';
import Products from '../../pages/Products';
import ProductsAll from '../../pages/ProductsAll';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function Body() {

	return (
		<div className="container">
			<div className="col-9 col-xs-9 col-sm-9 col-md-10 col-lg-11 row">
			<Routes>
				<Route path="/products/" element={<ProductsAll url={URL} addToCart={undefined}/>} /> 
				<Route path="/products/:categoryId" element={<Products url={URL} addToCart={undefined}/>} /> 
			</Routes>
			</div>
		</div>
	);
}

