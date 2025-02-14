import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "Blogs", path: "/blogs" },
	{ title: "Qualification", path: "/qualification" },
	{ title: "Services", path: "/services" },
	{ title: "Status", path: "/status" },
	{ title: "About", path: "/about" },
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed z-50 w-full text-white font-bold">

			<div className="border border-black/20 bg-black/30 backdrop-blur-3xl w-full flex items-center justify-center p-4 mx-auto">

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-8">
					{navLinks.map(({ title, path }, index) => (
						<li key={index}>
							<Link
								to={path}
								className="relative transition-all duration-300 transform hover:text-white hover:[text-shadow:_0_0_30px_rgba(255,255,255,1),_0_0_50px_rgba(255,255,255,0.8)]"
							>
								{title}
							</Link>
						</li>
					))}
				</ul>

				{/* Mobile Menu Toggle */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden"
					aria-label="Toggle navigation menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className={`transform -translate-x-1/2 -translate-y-1/2 border border-black/20 bg-black/30 backdrop-blur-2xl p-6 ${isOpen ? "block" : "hidden"}`}
				style={{ maxWidth: '100%', width: '100%' }}
			>
				<ul className="flex flex-col items-center space-y-4">
					{navLinks.map(({ title, path }, index) => (
						<li key={index}>
							<Link
								to={path}
								className="block text-center transition-all duration-300 transform hover:text-white hover:[text-shadow:_0_0_30px_rgba(255,255,255,1),_0_0_50px_rgba(255,255,255,0.8)]"
								onClick={() => setIsOpen(false)}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</nav>
	);
};
