import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './pages/Home';
import Products from './pages/Products';
import Body from './components/body';

const URL = 'http://localhost/verkkokauppaBackEndi/';

function App() {
	return (
		<>
			<Header></Header>
			<Navbar url={URL} />

			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Products" element={<Products />} />
				</Routes>
			</div>
			<Body></Body>
		</>
	);
}

export default App;
