import React, { useState, useEffect } from 'react';
import './body.scss';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import axios from 'axios';

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
						<h5 className="card-title">Card title</h5>
						<Link className="links btn btn-outline-light btn-lg" role="button" to={'/productDetail/'}>Tuotetiedot</Link>
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
						<a href="" className="btn btn-primary">
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
