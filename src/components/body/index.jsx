import React, { useState, useEffect } from 'react';
import './body.scss';
import JonneCard from '../jonneCard/jonneCard';

const URL = 'http://localhost/verkkokauppaBackEndi/';

export default function body() {
	const renderCards = () => {
		let cards = [];

		for (let i = 0; i < 8; i++) {
			cards.push(<JonneCard key={i}/>);
		}
		return cards;
	};

	return <div className="items-container">{renderCards()}</div>;
}
