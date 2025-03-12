import React from 'react';

function Footer({ isDarkMode }) {
	return (
		<footer
			className={`py-4 ${
				isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'
			}`}
		>
			<div className="container mx-auto text-center">
				<p>
<<<<<<< HEAD
					&copy; {new Date().getFullYear()} Henry Alvarez Portfolio. All rights
					reserved.
=======
					&copy; {new Date().getFullYear()} Henry Alvarez Portfolio. Todos los
					derechos reservados.
>>>>>>> 8ae895e (update/info of hero and skills)
				</p>
			</div>
		</footer>
	);
}

export default Footer;
