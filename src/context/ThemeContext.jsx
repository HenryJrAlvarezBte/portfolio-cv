import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setIsDarkMode(savedTheme === 'dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDarkMode ? 'dark' : 'light';
		setIsDarkMode(!isDarkMode);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

export { ThemeProvider, useTheme };
