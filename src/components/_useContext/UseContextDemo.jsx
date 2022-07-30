import React, { createContext, useContext, useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent';

export const ThemeContext = createContext();

// Custom hook
export const useTheme = () => {
    return useContext(ThemeContext);
}

const UseContextDemo = () => {
	const [theme, setTheme] = useState(false);

	return (
		<ThemeContext.Provider value={{ theme }}>
			<button onClick={() => setTheme(!theme)}>Toggle Theme</button>
			<FunctionContextComponent />
		</ThemeContext.Provider>
	);
};

export default UseContextDemo;
