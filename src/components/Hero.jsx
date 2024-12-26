import React from 'react';

function Hero({ isDarkMode }) {
	return (
		<div className="first-letter: bg-cover bg-center h-screen text-black flex items-center justify-center">
			<div className="text-center px-4">
				<h1
					className={`text-4xl md:text-6xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Bienvenido, soy Henry Alvarez
				</h1>
				<p
					className={`text-lg md:text-2xl mb-8 desc ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Como desarrollador web Front End junior especializado en React de
					Argentina, disfruto creando interfaces de usuario intuitivas y
					dinámicas. Tengo experiencia en desarrollar componentes reutilizables
					y gestionar el estado de las aplicaciones usando React. Me encanta
					transformar diseños en experiencias de usuario interactivas y siempre
					estoy ansioso por aprender y adoptar nuevas tecnologías.
				</p>
				<a
					href="#about"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Habilidades
				</a>
				<a
					href="/public/henryalvarez.pdf"
					download
					className="bg-green-500 m-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				>
					Descargar CV
				</a>
			</div>
		</div>
	);
}

export default Hero;
