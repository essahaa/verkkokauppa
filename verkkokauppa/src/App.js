import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './pages/Home';
import Products from './pages/Products';
import { useState } from 'react';


const URL = 'http://localhost/verkkokauppaBackEndi/';

function App() {
const [cart, setCart] = useState([]);

function addToCart(product) {
	const newCart = [...cart, product];
	setCart(newCart);
	localStorage.setItem('cart', JSON.stringify(newCart));
}

	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/products/" element={<Products url={URL} addToCart={addToCart}/>} />
			</Routes>
		</div>
	);
}

export default App;
