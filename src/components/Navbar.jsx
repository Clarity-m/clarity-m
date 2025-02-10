import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
	{ title: "Home", path: "/" },
	{ title: "Blogs", path: "/blogs" },
	{ title: "Services", path: "/services" },
	{ title: "About", path: "/about" },
];

export const Navbar = () => {
	return (
		<div className="z-50 w-full text-white font-bold">
			<div
				className="border border-black/20 bg-black/30 backdrop-blur-3xl w-full
                   flex items-center justify-center p-2 mx-auto rounded-br-full rounded-bl-full"
			>
				<ul className="flex flex-row p-2 space-x-8">
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								to={link.path}
								className="relative transition-all duration-300 ease-in-out 
                           				   transform hover:skew-x-12 hover:text-white
                           				   hover:[text-shadow:_0_0_20px_rgba(255,255,255)]"
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
