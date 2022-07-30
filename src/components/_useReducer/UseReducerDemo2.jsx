import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
	ADD_TODO: 'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete_todo',
};

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, addNew(action.payload)];

		case ACTIONS.TOGGLE_TODO:
			return todos.map((todo) =>
				todo.id === action.payload
					? {
							...todo,
							complete: !todo.complete,
					  }
					: todo,
			);
		case ACTIONS.DELETE_TODO:
			return todos.filter((todo) => todo.id !== action.payload);
		default:
			return todos;
	}
};

const addNew = (name) => ({
	id: Date.now(),
	name,
	complete: false,
});

const UseReducerDemo2 = () => {
	const [todos, dispatch] = useReducer(reducer, []);
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: name });
		setName('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} dispatch={dispatch} />
			))}
		</div>
	);
};

export default UseReducerDemo2;
