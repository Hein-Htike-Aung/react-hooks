import React, { useEffect, useState } from 'react';

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems(2));
		console.log('updating Items');
	}, [getItems]);

	return (
		<>
			{items.map((item, idx) => (
				<div key={idx}>{item}</div>
			))}
		</>
	);
};

export default List;
