import React from 'react';
import Products from '../../pages/Products';
import './body.scss';
export default function body() {

	

	return (
		<div className="items-container">
			<div className="kortti col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<div className="card">
					<img
						src={'/images/battery.png'}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						{products.map(product => (
						<h5 className="card-title" key={product.id}>{product.name}</h5>
						))}
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
	);
}
