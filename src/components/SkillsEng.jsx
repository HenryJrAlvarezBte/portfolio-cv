import React from 'react';

function SkillsEng({ isDarkMode }) {
	const skills = [
<<<<<<< HEAD
		{ name: 'JavaScript', level: 'Advanced' },
		{ name: 'React', level: 'Advanced' },
		{ name: 'HTML', level: 'Advanced' },
		{ name: 'CSS', level: 'Advanced' },
		{ name: 'Node.js', level: 'Intermediate' },
		{ name: 'Java', level: 'Basic' },
=======
		{ name: 'JavaScript' },
		{ name: 'React' },
		{ name: 'HTML' },
		{ name: 'CSS' },
		{ name: 'Node.js' },
		{ name: 'TypeScript' },
>>>>>>> 8ae895e (update/info of hero and skills)
	];

	return (
		<div
			id="skills"
			className={`py-20 text-center ${
				isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
			}`}
		>
			<div className="container mx-auto px-4">
				<h2
					className={`text-4xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Skills
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Here are some of the technologies I've been working with recently:
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className={`p-4 rounded shadow transform transition-all duration-1000 hover:scale-105 ${
								isDarkMode
									? 'bg-gray-950 hover:bg-gray-700 text-white'
									: 'bg-gray-300 hover:bg-gray-100 text-black'
							}`}
						>
							<h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
							<p className="text-lg">{skill.level}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillsEng;
