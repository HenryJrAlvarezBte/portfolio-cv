import React from 'react';

function Projects({ isDarkMode }) {
	const projects = [
		{
			title: 'Rick and Morty',
			description:
				'El proyecto consistió en crear una página web para la serie Rick and Morty utilizando su API, permitiendo a los usuarios filtrar y visualizar información detallada sobre los personajes, ubicaciones y episodios de la serie.',
			imageUrl: './rick-and-morty-app.png',
			link: 'https://rick-and-morty-app-web-blond.vercel.app',
			github: 'https://github.com/tu-github/rick-and-morty',
		},
		{
			title: 'Pokedex App',
			description:
				'El proyecto consistió en crear una página web utilizando la API de Pokédex, permitiendo a los usuarios buscar y visualizar información detallada sobre los Pokémon.',
			imageUrl: './pokedex-app.png',
			link: 'https://pokedex-app-two-rho.vercel.app',
			github: 'https://github.com/tu-github/pokedex-app',
		},
		{
			title: 'Booking App',
			description:
				'El proyecto consistió en construir una página web que utiliza una API de reservas de hoteles, permitiendo a los usuarios buscar y reservar alojamiento fácilmente.',
			imageUrl: './booking-app.png',
			link: 'https://booking-app-henry-dev.vercel.app',
			github: 'https://github.com/tu-github/booking-app',
		},
	];

	return (
		<div
			id="projects"
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
					Proyectos
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Aquí tienes algunos proyectos en los que he trabajado recientemente:
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{projects.map((project) => (
						<div
							key={project.title}
							className={`p-4 rounded shadow transform transition-transform duration-300 hover:scale-105 min-h-100 flex flex-col justify-between ${
								isDarkMode
									? 'bg-gray-900 hover:bg-gray-700'
									: 'bg-white hover:bg-gray-300'
							}`}
						>
							<img
								src={project.imageUrl}
								alt={project.title}
								className="h-80 w-full object-cover mb-4 rounded"
							/>
							<h3
								className={`text-2xl font-semibold mb-2 ${
									isDarkMode ? 'text-white' : 'text-black'
								}`}
							>
								{project.title}
							</h3>
							<p
								className={`text-lg mb-4 ${
									isDarkMode ? 'text-white' : 'text-black'
								}`}
							>
								{project.description}
							</p>
							<div className="flex space-x-2">
								<a
									href={project.link}
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"
								>
									Ver Proyecto
								</a>
								<a
									href={project.github}
									className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-1"
								>
									Ver Github
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
