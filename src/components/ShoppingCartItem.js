import React from 'react';

const Item = props => {
	// yes I'm using a weird mix of .net naming conventions
	const removeItem_Click = e => {
		props.removeItem(props.transactId);
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={removeItem_Click}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
