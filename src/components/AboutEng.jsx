import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function AboutEng({ isDarkMode }) {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const descRef1 = useRef(null);
	const descRef2 = useRef(null);

	useEffect(() => {
		const splitTitle = new SplitType(titleRef.current, { types: 'words' });
		const splitDesc1 = new SplitType(descRef1.current, { types: 'words' });
		const splitDesc2 = new SplitType(descRef2.current, { types: 'words' });

		const allWords = [
			...splitTitle.words,
			...splitDesc1.words,
			...splitDesc2.words,
		];

		gsap.from(allWords, {
			y: 80,
			opacity: 0,
			stagger: 0.05,
			duration: 1,
			ease: 'power3.out',
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
					About Me
				</h2>
				<p
					ref={descRef1}
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					Hello! I am a developer committed to creating efficient solutions
					using modern technologies. I focus on problem-solving and teamwork,
					contributing ideas and optimizing processes to achieve solid and
					functional results. I enjoy working in dynamic environments where
					collaboration and continuous improvement are key to success.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-4">
					<div className="w-full md:w-2/3">
						<p
							ref={descRef2}
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
