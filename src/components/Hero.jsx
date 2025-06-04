import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

function Hero({ isDarkMode }) {
	const titleRef = useRef(null);
	const descRef = useRef(null);
	const link1Ref = useRef(null);
	const link2Ref = useRef(null);

	useEffect(() => {
		const splitTitle = new SplitType(titleRef.current, {
			types: 'words, chars',
		});
		const splitDesc = new SplitType(descRef.current, { types: 'words, chars' });
		const splitLink1 = new SplitType(link1Ref.current, {
			types: 'words, chars',
		});
		const splitLink2 = new SplitType(link2Ref.current, {
			types: 'words, chars',
		});

		const allWords = [
			...splitTitle.words,
			...splitDesc.words,
			...splitLink1.words,
			...splitLink2.words,
		];

		gsap.from(allWords, {
			duration: 1,
			y: 100,
			autoAlpha: 0,
			stagger: 0.05,
			ease: 'power3.out',
		});

		return () => {
			if (titleRef.current) {
				titleRef.current.innerHTML = titleRef.current.textContent;
			}
			if (descRef.current) {
				descRef.current.innerHTML = descRef.current.textContent;
			}
			if (link1Ref.current) {
				link1Ref.current.innerHTML = link1Ref.current.textContent;
			}
			if (link2Ref.current) {
				link2Ref.current.innerHTML = link2Ref.current.textContent;
			}
		};
	}, []);

	return (
		<div className="bg-cover bg-center h-screen text-black flex items-center justify-center">
			<div className="text-center px-4 max-w-4xl">
				<h1
					ref={titleRef}
					className={`text-4xl md:text-6xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Bienvenido, soy Henry Alvarez
				</h1>

				<p
					ref={descRef}
					className={`text-lg md:text-2xl mb-8 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Desarrollador Web Full Stack Junior con 2 años de experiencia en
					proyectos con React, TypeScript, JavaScript, Node.js y Express.
					Especializado en el desarrollo de interfaces dinámicas, componentes
					reutilizables y gestión de estado. Además, manejo tecnologías y
					frameworks para estilización como Bootstrap y Tailwind, transformando
					diseños en experiencias interactivas. Siempre abierto a aprender
					nuevas herramientas y mejorar mis habilidades.
				</p>

				<a
					ref={link1Ref}
					href="#about"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
				>
					Habilidades
				</a>

				<a
					ref={link2Ref}
					href="/henryalvarez.pdf"
					download
					className="bg-green-500 m-10 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
				>
					Descargar CV
				</a>
			</div>
		</div>
	);
}

export default Hero;
