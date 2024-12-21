import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/NavBar';
import NavbarEng from './components/NavbarEng';
import Hero from './components/Hero';
import HeroEng from './components/HeroEng';
import About from './components/About';
import AboutEng from './components/AboutEng';
import Skills from './components/Skills';
import SkillsEng from './components/SkillsEng';
import Projects from './components/Projects';
import ProjectsEng from './components/ProjectsEng';
import Contact from './components/Contact';
import ContactEng from './components/ContactEng';
import Footer from './components/Footer';
import FooterEng from './components/FooterEng';
import Bubbles from './components/Bubbles';
import './App.css';
import SidebarTheme from './components/SidebarTheme';

function App() {
	const { isDarkMode, toggleTheme } = useTheme();
	const [isEnglish, setIsEnglish] = useState(false);

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language');
		if (savedLanguage) {
			setIsEnglish(savedLanguage === 'en');
		}
	}, []);

	const toggleLanguage = (language) => {
		const newLanguage = language;
		setIsEnglish(newLanguage === 'en');
		localStorage.setItem('language', newLanguage);
	};

	return (
		<div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
			<SidebarTheme isDarkMode={isDarkMode} />
			{isEnglish ? (
				<NavbarEng
					setIsEnglish={() => toggleLanguage('es')}
					toggleTheme={toggleTheme}
					isDarkMode={isDarkMode}
				/>
			) : (
				<Navbar
					setIsEnglish={() => toggleLanguage('en')}
					toggleTheme={toggleTheme}
					isDarkMode={isDarkMode}
				/>
			)}
			<Bubbles />
			{isEnglish ? (
				<HeroEng isDarkMode={isDarkMode} />
			) : (
				<Hero isDarkMode={isDarkMode} />
			)}
			{isEnglish ? (
				<AboutEng isDarkMode={isDarkMode} />
			) : (
				<About isDarkMode={isDarkMode} />
			)}
			{isEnglish ? (
				<SkillsEng isDarkMode={isDarkMode} />
			) : (
				<Skills isDarkMode={isDarkMode} />
			)}
			{isEnglish ? (
				<ProjectsEng isDarkMode={isDarkMode} />
			) : (
				<Projects isDarkMode={isDarkMode} />
			)}
			{isEnglish ? (
				<ContactEng isDarkMode={isDarkMode} />
			) : (
				<Contact isDarkMode={isDarkMode} />
			)}
			{isEnglish ? (
				<FooterEng isDarkMode={isDarkMode} />
			) : (
				<Footer isDarkMode={isDarkMode} />
			)}
		</div>
	);
}

export default App;
