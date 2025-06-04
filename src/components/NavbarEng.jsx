import React, { useState } from 'react';
import { FaLanguage, FaSun, FaMoon } from 'react-icons/fa6';
import { IoMenu, IoClose } from 'react-icons/io5';

function NavbarEng({ setIsEnglish, toggleTheme, isDarkMode }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav
			className={`p-4 sticky w-full top-0 z-50 ${
				isDarkMode ? 'bg-gray-950' : 'bg-gray-200'
			}`}
		>
			<div className="container mx-auto flex justify-between items-center">
				<a
					href="#"
					className={`${
						isDarkMode ? 'text-white' : 'text-black'
					} text-2xl font-bold`}
				>
					Dev. Henry Alvarez
				</a>
				<div className="md:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className={`${isDarkMode ? 'text-white' : 'text-black'}`}
					>
						{menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
					</button>
					<button
						onClick={() => setIsEnglish(false)}
						className={`${isDarkMode ? 'text-white' : 'text-black'} ml-4`}
					>
						Cambiar a Español
					</button>
					<button
						onClick={toggleTheme}
						className={`${isDarkMode ? 'text-white' : 'text-black'} ml-4`}
					>
						{isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
					</button>
				</div>
				<div className="hidden md:flex items-center space-x-4">
					<a
						href="#about"
						className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
							isDarkMode ? 'text-white' : 'text-gray-700'
						}`}
					>
						About Me
					</a>
					<a
						href="#skills"
						className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
							isDarkMode ? 'text-white' : 'text-gray-700'
						}`}
					>
						Skills
					</a>
					<a
						href="#projects"
						className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
							isDarkMode ? 'text-white' : 'text-gray-700'
						}`}
					>
						Projects
					</a>
					<a
						href="#contact"
						className={`${isDarkMode ? 'text-gray-300' : 'text-black'} hover:${
							isDarkMode ? 'text-white' : 'text-gray-700'
						}`}
					>
						Contact
					</a>
					<button
						onClick={() => setIsEnglish(false)}
						className={`${isDarkMode ? 'text-white' : 'text-black'} ml-4`}
					>
						<FaLanguage />
					</button>
					<button
						onClick={toggleTheme}
						className={`${isDarkMode ? 'text-white' : 'text-black'} ml-4`}
					>
						{isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavbarEng;
