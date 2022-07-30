import React, { useCallback, useState } from 'react';
import List from './List';

const UseCallbackDemo = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const getItems = useCallback(
		// like useMemo (but useCallback is function, so can pass parameters)
		(num) => {
			return [number, number * num];
		},
		[number],
	);

	const themeStyle = {
		backgroundColor: dark ? 'black' : 'white',
		color: dark ? 'white' : 'black',
	};

	return (
		<div>
			<input type='text' onChange={(e) => setNumber(e.target.value)} />
			<button onClick={() => setDark(!dark)}>Change theme</button>
			<div style={themeStyle}>
				<List getItems={getItems} />
			</div>
		</div>
	);
};

export default UseCallbackDemo;
