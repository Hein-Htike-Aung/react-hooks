import { useCallback, useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
	return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = (key, defaultValue) => {
	return useStorage(key, defaultValue, window.sessionStorage);
};

const getItem = (key, defaultValue, storageObject) => {
	const storedItem = storageObject.getItem(key);

	if (!storageObject) return JSON.parse(storedItem);

	return defaultValue;
};

const useStorage = (key, defaultValue, storageObject) => {
	const [value, setValue] = useState(getItem(key, defaultValue, storageObject));

	useEffect(() => {
		if (!value) return storageObject.removeItem(key);
		storageObject.setItem(key, JSON.stringify(value));
	}, [key, storageObject, value]);

	const remove = useCallback(() => {
		setValue('');
	}, []);

	return [value, setValue, remove];
};
