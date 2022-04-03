import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	return (
		<div className="App">
			<header>
				<div className="row head">
					<div className="col-8 col-xs-8 col-sm-9 col-md-9 col-lg-10 logo">
						<h1>Aapon valinta</h1>
					</div>
					<div className="col-4 col-xs-4 col-sm-3 col-md-3 col-lg-2 shopcarter">
						<img
							src={require('./images/cart.png')}
							className="shopcart"
							alt="..."
						/>
					</div>
				</div>
			</header>

			<div className='bod'>
				<div className="row">
					<div className="nav col-3 col-xs-3 col-sm-3 col-md-2 col-lg-1">
						<ul className="list">
							<li className="listItem">
								<a href="#" className="navlink">
									Etusivu
								</a>
							</li>
							<li className="listItem">
								<a href="#" className="navlink">
									Etusivu
								</a>
							</li>
							<li className="listItem">
								<a href="#" className="navlink">
									Etusivu
								</a>
							</li>
							<li className="listItem">
								<a href="#" className="navlink">
									Etusivu
								</a>
							</li>
							<li className="listItem">
								<a href="#" className="navlink">
									Etusivu
								</a>
							</li>
						</ul>
					</div>

					<div className="col-9 col-xs-9 col-sm-9 col-md-10 col-lg-11 row">
						<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
							<div className="card">
								<img
									src={require('./images/battery.png')}
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
									src={require('./images/battery.png')}
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
									src={require('./images/battery.png')}
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
									src={require('./images/battery.png')}
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
		</div>
	);
}

export default App;
