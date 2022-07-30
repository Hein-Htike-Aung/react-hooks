import React, { useState } from 'react';
import { useFetch } from './useFetch';

const UseFetchDemo = () => {
	const [counter, setCounter] = useState(1);

	const [loading, error, data] = useFetch(
		`https://jsonplaceholder.typicode.com/todos/${counter}`,
		counter,
	);

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
			<div>Fetching Id: {counter}</div>
			{loading ? (
				'Loading'
			) : (
				<>
					{data.map((item) => (
						<div key={item.id}>
							{item.id} - {item.title}
						</div>
					))}
				</>
			)}
			<div>{error}</div>
		</div>
	);
};

export default UseFetchDemo;
