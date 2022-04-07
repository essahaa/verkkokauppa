import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/header';


function App() {
	return (
		<div className="App">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Products" element={<Products />} />
			</Routes>
		</div>
	);
}

export default App;
