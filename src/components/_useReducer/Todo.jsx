import React from 'react';
import { ACTIONS } from './UseReducerDemo2';

const Todo = ({ todo, dispatch }) => {
	return (
		<div>
			<span style={{ color: todo.complete ? '#aaa' : 'black' }}>
				{todo.name}
			</span>
			<button
				onClick={() => {
					dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id });
				}}
			>
				Toggle
			</button>
			<button
				onClick={() => {
					dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id });
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default Todo;
