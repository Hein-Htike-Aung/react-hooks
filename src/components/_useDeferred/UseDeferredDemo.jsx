import React, { useState } from 'react';
import List from './List';

const UseDeferredDemo = () => {
	const [input, setInput] = useState('');

	return (
		<div>
			<input
				type='text'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<List input={input} />
		</div>
	);
};

export default UseDeferredDemo;
