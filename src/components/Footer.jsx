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
					&copy; {new Date().getFullYear()} Henry Alvarez Portfolio. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
