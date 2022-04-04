import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className="container">
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/Products" element={<Products />} />
				</Routes>
				<Navbar></Navbar>
				<div className="col-9 col-xs-9 col-sm-9 col-md-10 col-lg-11 row">
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
						<div className="card">
							<img
								src={'/images/battery.png'}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
