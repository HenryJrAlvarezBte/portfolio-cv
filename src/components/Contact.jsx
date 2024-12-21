import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ isDarkMode }) {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_w9bkpi6',
				'template_tuwjb03',
				formRef.current,
				'JYUuWyRoOSUoR2ycG',
			)
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					alert('Message sent!');
					setForm({ name: '', email: '', message: '' });
				},
				(error) => {
					console.log('FAILED...', error.text);
					alert('Error sending message: ' + error.text);
				},
			);
	};

	return (
		<div
			id="contact"
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
					Contácteme
				</h2>
				<p
					className={`text-lg mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
				>
					¿Tienes una pregunta o quieres trabajar juntos? ¡No dudes en ponerte
					en contacto!
				</p>
				<form
					ref={formRef}
					className="max-w-lg mx-auto"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							className={`w-full p-2 border ${
								isDarkMode ? 'border-gray-700' : 'border-gray-300'
							} rounded ${
								isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
							}`}
							placeholder="Tu Nombre"
							required
						/>
					</div>
					<div className="mb-4">
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							className={`w-full p-2 border ${
								isDarkMode ? 'border-gray-700' : 'border-gray-300'
							} rounded ${
								isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
							}`}
							placeholder="Tu Email"
							required
						/>
					</div>
					<div className="mb-4">
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							className={`w-full p-2 border resize-none ${
								isDarkMode ? 'border-gray-700' : 'border-gray-300'
							} rounded ${
								isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
							}`}
							placeholder="Tu Mensaje"
							rows="5"
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Enviar Mensaje
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
