import React, { useEffect, useMemo, useState } from 'react';

const slowFunction = (num) => {
	for (let i = 0; i <= 1000000000; i++) {}
	return num * num;
};

const UseMemoDemo = () => {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const themeStyles = useMemo(() => {
		// only effect when the theme is chenged (doesn't effect to number)
		return {
			backgroundColor: dark ? 'black' : 'white',
			color: dark ? 'white' : 'black',
		};
	}, [dark]);

	useEffect(() => {
		console.log('Theme Changed');
	}, [themeStyles]);

	// Caching the value
	const doubleNumber = useMemo(() => {
		// only effect when the dependency is changed (change theme will be working perfectly)
		return slowFunction(number);
	}, [number]);

	return (
		<div>
			<input type='text' onChange={(e) => setNumber(e.target.value)} />
			<button onClick={() => setDark(!dark)}>ChangeTheme</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</div>
	);
};

export default UseMemoDemo;
