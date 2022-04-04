
import { Link } from 'react-router-dom';
import './navbar.scss';
import axios from 'axios';
import React,{useState, useEffect} from 'react';

export default function Navbar({url}) {
	const [gategories,setGategories] = useState([]);

	useEffect(() => {
		console.log(url);
		axios.get(url + "products/getcategories.php")
		.then((response) => {
			const json = response.data;
			setGategories(json);
			console.log(json)
		}).catch (error => {
			alert(error.response === undefined ? error : error.response.data.error);
		})
	}, [])
}

function nav() {
	return (
		<div className="row">
			<div className="nav col-3 col-xs-3 col-sm-3 col-md-2 col-lg-1">
				<ul className="list">
					{categories.map(category => (
						<li className="listItem">
							<Link
								className="links"
								to={'products/' + category.id}>
									{gategory.name}
							</Link>
						</li>
					))}
					<li className="listItem">
						{/* 	<a href="#" className="navlink">
									Etusivu
								</a> */}
						<Link
							className="links"
							to="/verkkokauppa/src/pages/Products.js"
						>
							Tuotteet
						</Link>
					</li>
					<li className="listItem">
						<Link
							className="links"
							to={'products/' + category.id}>{gategory.name}
						
							
						</Link>
					</li>
					<li className="listItem">
						{/* <a href="#" className="navlink">
							Etusivu
						</a> */}
					</li>
					<li className="listItem">
						{/* 	<a href="#" className="navlink">
							Etusivu
						</a> */}
					</li>
				</ul>
			</div>
		</div>
	);
}

