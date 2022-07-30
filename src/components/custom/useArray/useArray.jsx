const { useState } = require('react');

const useArray = (initialValue) => {
	const [array, setArray] = useState(initialValue);

	const push = (value) => {
		setArray((cur) => [...cur, value]);
	};

	const update = (index, newElement) => {
		setArray((cur) => [
			...cur.slice(0, index - 1),
			newElement,
			...cur.slice(index, cur.length),
		]);
	};

	const filter = (callback) => {
		setArray((cur) => cur.filter(callback));
	};

	const remove = (index) => {
		setArray((cur) => [
			...cur.slice(0, index - 1),
			...cur.slice(index, cur.length),
		]);
	};

	const clear = () => {
		setArray([]);
	};

	return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;
