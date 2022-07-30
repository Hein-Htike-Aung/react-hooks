import { useState } from 'react';

const useToggle = (input) => {
	const [value, setValue] = useState(input);

	const toggleValue = (value) => {
		setValue((currentValue) =>
			typeof value === 'boolean' ? value : !currentValue,
		);
	};

	return [value, toggleValue];
};

export default useToggle;
