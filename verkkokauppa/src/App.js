import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/header';

const URL = 'http://localhost/verkkokauppaBackEndi/';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/:categoryId/" element={<Products url={URL}/>} /> 
			</Routes>
		</div>
	);
}

export default App;
