import React from 'react';
import { useStateWithValidation } from './useStateWithValidation';

const UseStateWithValidationDemo = () => {
	const [name, setName, isValid] = useStateWithValidation(
		(name) => name.length >= 5,
		'',
	);

	return (
		<div>
			<div>Valid: {isValid.toString()}</div>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
};

export default UseStateWithValidationDemo;
