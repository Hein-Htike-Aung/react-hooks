import React, { useId } from 'react';

const EmailForm = () => {
	const id = useId();
	return (
		<div>
			<label htmlFor={`${id}-email`}>Email</label>
			<input type='text' id={`${id}-email`} />
			<label htmlFor={`${id}-name`}>Name</label>
			<input type='text' id={`${id}-name`} />
		</div>
	);
};

export default EmailForm;
