import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header';
function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className="container">
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
		</div>
	);
}

export default App;
