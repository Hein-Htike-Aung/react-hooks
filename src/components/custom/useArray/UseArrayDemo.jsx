import React from 'react';
import useArray from './useArray';

const UseArrayDemo = () => {
	const { array, set, push, filter, update, remove, clear } = useArray([
		1, 2, 3, 4,
	]);

	return (
		<div>
			<div>{array.toString()}</div>
			<button onClick={() => push(5)}>Add 5</button>
			<button onClick={() => update(2, 9)}>Change second element to 9</button>
			<button onClick={() => remove(2)}>Remove second element</button>
			<button onClick={() => filter((n) => n < 4)}>Keep numbers less than 4</button>
			<button onClick={() => set([1, 4])}>set to 1,4</button>
			<button onClick={clear}>clear</button>
		</div>
	);
};

export default UseArrayDemo;
