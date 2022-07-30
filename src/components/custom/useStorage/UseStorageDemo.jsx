import React from 'react';
import { useLocalStorage, useSessionStorage } from './useStorage';

const UseStorageDemo = () => {
	const [name, setName, removeName] = useLocalStorage('name', 'Xiao');
	const [age, setAge, removeAge] = useSessionStorage('age', 20);

	return (
		<div>
			<div>
				{name}-{age}
			</div>
			<button onClick={() => setName('Aung')}>Set Name</button>
			<button onClick={() => setAge(40)}>Set Age</button>
			<button onClick={removeName}>Remove Name</button>
			<button onClick={removeAge}>Remove Age</button>
		</div>
	);
};

export default UseStorageDemo;
