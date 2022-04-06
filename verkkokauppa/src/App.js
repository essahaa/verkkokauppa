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
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Products/:categoryId" element={<Products url={URL}/>} />
				</Routes>
				<Header></Header>
				<Navbar url={URL} />
				<Body></Body>
			</div>
		</>
	);
}

export default App;
