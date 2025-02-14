import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
	{ title: "Blogs", path: "/blogs" },
	{ title: "Qualification", path: "/qualification" },
	{ title: "Services", path: "/services" },
	// { title: "Status", path: "/status" },
	{ title: "About", path: "/about" },
];

export const NavbarHome = () => {
	return (
		<div className="z-50 fixed w-full text-white">
			<div className="flex items-center justify-center p-4 md:p-6">
				<ul className="flex flex-row space-x-6 md:space-x-12 lg:space-x-16">
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link
								to={link.path}
								className="relative transition-all duration-300 ease-in-out text-lg md:text-xl lg:text-2xl transform hover:[text-shadow:_0_0_30px_rgba(255,255,255,1),_0_0_50px_rgba(255,255,255,0.8)]"
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
