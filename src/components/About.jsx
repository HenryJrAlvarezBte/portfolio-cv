import React from 'react';

function About({ isDarkMode }) {
	return (
		<div
			id="about"
			className={`py-20 text-center ${
				isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
			}`}
		>
			<div className="container mx-auto px-4">
				<h2
					className={`text-4xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Sobre mí
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					¡Hola! Soy un desarrollador apasionado con experiencia en la creación
					de aplicaciones web utilizando tecnologías modernas. Me encanta
					resolver problemas y crear valor a través del código.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<div className="w-full md:w-2/3">
						<p
							className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}
						>
							He trabajado con una variedad de lenguajes y frameworks, y siempre
							estoy ansioso por aprender cosas nuevas. Cuando no estoy
							programando, puedes encontrarme explorando nuevos lugares o
							leyendo un buen libro.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
