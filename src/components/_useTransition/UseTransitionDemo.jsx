import React, { useState, useTransition } from 'react';

const UseTransitionDemo = () => {
	// useTransition make the page renders twice, based on priority
	const [isPending, startTransition] = useTransition();

	// hight priority state
	const [input, setInput] = useState('');

	// low priority state
	const [list, setList] = useState([]);

	const onChange = (e) => {
		setInput(e.target.value);
		startTransition(() => {
			// make the code in low priority
			let l = [];
			for (let i = 0; i < 20000; i++) {
				l.push(e.target.value);
			}

			setList(l);
		});
	};

	return (
		<div>
			<input type='text' value={input} onChange={(e) => onChange(e)} />
			{isPending
				? 'Loading'
				: list.map((item, idx) => <div key={idx}>{item}</div>)}
		</div>
	);
};

export default UseTransitionDemo;
