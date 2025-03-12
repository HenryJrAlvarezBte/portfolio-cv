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
					I am a Junior Full Stack Web Developer with 2 years of experience
					working on various projects using TypeScript and Node.js. Specialized
					in React, I enjoy creating intuitive and dynamic interfaces,
					developing reusable components, and managing application state. I am
					passionate about transforming designs into interactive experiences and
					always eager to learn new technologies.
				</p>
				<a
					href="#about"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Skills
				</a>
				<a
					href="/henryalvarez.pdf"
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
