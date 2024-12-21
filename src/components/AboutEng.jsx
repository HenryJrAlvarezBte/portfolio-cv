import React from 'react';

function AboutEng({ isDarkMode }) {
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
					About Me
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Hello! I am a passionate developer with experience in creating web
					applications using modern technologies. I love solving problems and
					creating value through code.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<div className="w-full md:w-2/3">
						<p
							className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}
						>
							I have worked with a variety of languages and frameworks, and I am
							always eager to learn new things. When I'm not programming, you
							can find me exploring new places or reading a good book.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutEng;
