import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
<<<<<<< HEAD
	const [isDarkMode, setIsDarkMode] = useState(false);
=======
	const [isDarkMode, setIsDarkMode] = useState(true); // Tema oscuro por defecto
>>>>>>> 8ae895e (update/info of hero and skills)

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setIsDarkMode(savedTheme === 'dark');
<<<<<<< HEAD
=======
		} else {
			localStorage.setItem('theme', 'dark'); // Guarda el oscuro como predeterminado
>>>>>>> 8ae895e (update/info of hero and skills)
		}
	}, []);

	const toggleTheme = () => {
<<<<<<< HEAD
		const newTheme = !isDarkMode ? 'dark' : 'light';
=======
		const newTheme = isDarkMode ? 'light' : 'dark';
>>>>>>> 8ae895e (update/info of hero and skills)
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
