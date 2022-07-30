import React from 'react';
import { useCookie } from './useCookie';

const UseCookieDemo = () => {
	const [value, update, remove] = useCookie('name', 'john');

	return (
		<div>
			<div>{value}</div>
			<button onClick={() => update('Sally')}>Change Name to Sally</button>
			<button onClick={remove}>Change Name to Sally</button>
		</div>
	);
};

export default UseCookieDemo;
