import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {
	const [value, setValue] = useState('');

	useEffect(() => {
		console.log('Value changed');

		// whenever the value change return code will run first
		return () => {
			console.log('Clean up clode running');
		};
	}, [value]);

	return (
		<div>
			<select onChange={(e) => setValue(e.target.value)}>
				<option value='posts'>Posts</option>
				<option value='comments'>Comments</option>
			</select>
			<div>{value}</div>
		</div>
	);
};

export default UseEffectDemo;
