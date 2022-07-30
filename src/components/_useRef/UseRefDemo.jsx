import React, { useRef, useState } from 'react';

const UseRefDemo = () => {
	const [value, setValue] = useState('');
	const nameRef = useRef('');

	const handleClick = () => {
		console.log(nameRef.current.value);
	};

	return (
		<div>
			<input type='text' onChange={(e) => setValue(e.target.value)} />

			<input type='text' ref={nameRef} />
			<button onClick={handleClick}>ShowValue</button>
			<div>{value}</div>
		</div>
	);
};

export default UseRefDemo;
