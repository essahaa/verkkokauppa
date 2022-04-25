import React, { useState, useEffect } from 'react';
import './body.scss';
import JonneCard from '../jonneCard/jonneCard';
import axios from 'axios';

export default function Body(props) {
	const [jonnes, setJonnes] = useState([]);

	useEffect(() => {
		axios
			.get(props.url + 'products/getallproducts.php')
			.then((response) => {
				setJonnes(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
	}, [props.url]);

	const renderCards = () => {
		if (props.filter === 0) {
			return jonnes.map((item) => {
				return (
					<JonneCard
						image={item.image}
						name={item.name}
						price={item.price}
					/>
				);
			});
		} else {
			return jonnes
				.filter((item) => item.category_id === props.filter)
				.map((item) => {
					return (
						<JonneCard
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					);
				});
		}
	};

	return <div className="items-container">{renderCards()}</div>;
}
