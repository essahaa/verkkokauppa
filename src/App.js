import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/header';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import { useState } from 'react';

function App() {
	const [cart, setCart] = useState(["test"]);

	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				{/*TODO Fix Products page  */}
				<Route
					path="/Products"
					element={<Products url={undefined} addToCart={undefined} />}
				/>
				<Route
					path="/ProductDetail"
					element={<ProductDetail cart={cart} setCart={setCart} />}
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
