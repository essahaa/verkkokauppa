import React from 'react';

export default function ShoppingCart(props) {

    console.log(props.cart)

	return (
		<div
			style={{
				display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
			}}
		>
			{props.cart.map((item, index) => {
                return (<div>{item}</div>)
            })}
		</div>
	);
}
