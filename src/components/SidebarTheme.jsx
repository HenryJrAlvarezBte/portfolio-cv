import React from 'react';
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const SidebarTheme = ({ isDarkMode }) => {
	return (
		<div className={`fixed top-24 left-0 z-10`}>
			<div
				className={`flex flex-col space-y-4 ${isDarkMode ? 'dark' : 'light'}`}
			>
				<a href="https://www.linkedin.com" className="sidebar-icon">
					<SiLinkedin size="28" />
				</a>
				<a href="https://www.github.com" className="sidebar-icon">
					<FaGithub size="28" />
				</a>
				<a href="mailto:your-email@example.com" className="sidebar-icon">
					<FaEnvelope size="28" />
				</a>
				<a href="https://wa.me/your-number" className="sidebar-icon">
					<FaWhatsapp size="28" />
				</a>
			</div>
		</div>
	);
};

export default SidebarTheme;
