import React, { useDeferredValue, useEffect, useMemo } from 'react';

const List = ({ input }) => {
	// set deferredInput value until the input is complete
	const deferredInput = useDeferredValue(input);

	const List = useMemo(() => {
		let l = [];
		for (let i = 0; i < 20000; i++) {
			l.push(<div key={i}>{deferredInput}</div>);
		}

		return l;
	}, [deferredInput]);

	useEffect(() => {
		console.log('input', input);
		console.log('deferred: ', deferredInput);
	}, [input, deferredInput]);

	return List;
};

export default List;
