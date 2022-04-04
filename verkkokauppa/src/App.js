import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< Updated upstream
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './pages/Home';
import Products from './pages/Products';
import Body from './components/body';
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes

const URL = "http://localhost/verkkokauppaBackEndi/";

<<<<<<< Updated upstream
function App() {
	return (
		<>
			<Header></Header>
			<Navbar url={URL} />
=======
    </div>
  );
=======
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
//import Header from './components/header';
import Home from './pages/Home';
import Products from './pages/Products';
import Body from './components/body';
import Header from './components/header';
const URL = 'http://localhost/verkkokauppaBackEndi/';

function App() {
	return (
		<>
>>>>>>> Stashed changes
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Products" element={<Products />} />
				</Routes>
<<<<<<< Updated upstream
			</div>
			<Body></Body>
		</>
	);
=======
				<Header></Header>
				<Navbar url={URL} />
				<Body></Body>
			</div>
		</>
	);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}

export default App;
