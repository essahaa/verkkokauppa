import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/header';

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
