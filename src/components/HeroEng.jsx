import React from 'react';

function HeroEng({ isDarkMode }) {
	return (
		<div className="first-letter: bg-cover bg-center h-screen text-black flex items-center justify-center">
			<div className="text-center px-4">
				<h1
					className={`text-4xl md:text-6xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Welcome, I am Henry Alvarez
				</h1>
				<p
					className={`text-lg md:text-2xl mb-8 desc ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					As a junior Front End web developer specializing in React, I enjoy
					creating intuitive and dynamic user interfaces. I have experience
					developing reusable components and managing application state using
					React. I love transforming designs into interactive user experiences
					and am always eager to learn and adopt new technologies.
				</p>
				<a
					href="#about"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Skills
				</a>
				<a
					href="ruta/a/tu-cv.pdf"
					download
					className="bg-green-500 m-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					Download CV
				</a>
			</div>
		</div>
	);
}

export default HeroEng;
