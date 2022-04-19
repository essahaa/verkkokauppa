import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/header';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/ProductDetail" element={<ProductDetail/>}/>
			</Routes>
		</div>
	);
}

export default App;
