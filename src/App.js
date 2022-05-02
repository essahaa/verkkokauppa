import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Header from './components/header';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import ManageCategories from './pages/AdminPage';
import { useState } from 'react';
import ManageProducts from './pages/ProductAdd';

const URL = 'http://localhost/verkkokauppaBackEndi/';

function App() {
	const [cart, setCart] = useState(["test"]);

	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/productDetail/:id"
					element={<ProductDetail cart={cart} setCart={setCart} />}
				/>
				<Route
					path="/ShoppingCart"
					element={<ShoppingCart cart={cart} />}
				/>
				<Route
					path="/AdminPage"
					element={<ManageCategories url={URL} />}
				/>
				<Route
					path="/ProductAdd"
					element={<ManageProducts url={URL} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
