import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function About({ isDarkMode }) {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const descRef1 = useRef(null);
	const descRef2 = useRef(null);

	useEffect(() => {
		const splitTitle = new SplitType(titleRef.current, {
			types: 'words, chars',
		});
		const splitDesc1 = new SplitType(descRef1.current, {
			types: 'words, chars',
		});
		const splitDesc2 = new SplitType(descRef2.current, {
			types: 'words, chars',
		});

		const allWords = [
			...splitTitle.words,
			...splitDesc1.words,
			...splitDesc2.words,
		];

		gsap.from(allWords, {
			y: 100,
			autoAlpha: 0,
			stagger: 0.05,
			ease: 'power3.out',
			duration: 1,
			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top 80%',
				toggleActions: 'play none none none',
				once: true,
			},
		});

		return () => {
			if (titleRef.current) {
				titleRef.current.innerHTML = titleRef.current.textContent;
			}
			if (descRef1.current) {
				descRef1.current.innerHTML = descRef1.current.textContent;
			}
			if (descRef2.current) {
				descRef2.current.innerHTML = descRef2.current.textContent;
			}
		};
	}, []);

	return (
		<div
			id="about"
			ref={sectionRef}
			className={`py-20 text-center ${
				isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
			}`}
		>
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef}
					className={`text-4xl font-bold mb-4 ${
						isDarkMode ? 'text-white' : 'text-black'
					}`}
				>
					Sobre mí
				</h2>
				<p
					ref={descRef1}
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					¡Hola! Soy un desarrollador comprometido con la creación de soluciones
					eficientes mediante tecnologías modernas. Me enfoco en la resolución
					de problemas y en la colaboración dentro de equipos, aportando ideas y
					optimizando procesos para lograr resultados sólidos y funcionales.
					Disfruto trabajar en entornos dinámicos donde el trabajo en equipo y
					la mejora continua son clave para el éxito.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<div className="w-full md:w-2/3">
						<p
							ref={descRef2}
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
