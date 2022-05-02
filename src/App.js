import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Header from './components/header';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);
	const URL = 'http://localhost/verkkokauppaBackEndi/';

	return (
		<div className="App">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/productDetail/:id"
						element={
							<ProductDetail cart={cart} setCart={setCart} />
						}
					/>
					<Route
						path="/ShoppingCart"
						element={<ShoppingCart cart={cart} />}
					/>
				</Routes>
		</div>
	);
}

export default App;
