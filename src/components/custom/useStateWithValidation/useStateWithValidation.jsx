import { useCallback, useState } from 'react';

export const useStateWithValidation = (validationFunc, defaultValue) => {
	const [value, setValue] = useState(defaultValue);

	const [isValid, setIsValid] = useState(() => validationFunc(value));

	const onChange = useCallback(
		(nextValue) => {
			// merge next input value with useState
			setValue(nextValue);
			setIsValid(validationFunc(nextValue));
		},
		[validationFunc],
	);

	return [value, onChange, isValid];
};
