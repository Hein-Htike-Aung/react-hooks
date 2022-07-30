import React from 'react';
import './styles.css';
import { useTheme } from './UseContextDemo';

const FunctionContextComponent = () => {
	const { theme } = useTheme();

	return <div className={theme ? 'box dark' : 'box'}>theme</div>;
};

export default FunctionContextComponent;
