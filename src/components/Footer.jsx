import React from "react";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillFacebook,
	AiFillInstagram,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="fixed bottom-0 w-full border border-black/20 bg-black/30 backdrop-blur-md text-white py-1 z-50">
			<div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
				<p className="text-sm text-gray-100">© Clarity/DEV. All rights reserved.</p>
				<ul className="flex gap-4">
					<a href="https://github.com/clarity-m" aria-label="GitHub" className="hover:text-gray-300">
						<AiFillGithub size={24} />
					</a>
					{/* <a href="https://x.com" aria-label="X (Twitter)" className="hover:text-gray-300">
						<AiOutlineTwitter size={24} />
					</a>
					<a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
						<AiFillFacebook size={24} />
					</a>
					<a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
						<AiFillInstagram size={24} />
					</a> */}
					<a href="https://telegram.org/clarity_m" aria-label="Telegram" className="hover:text-gray-300">
						<FaTelegramPlane size={24} />
					</a>
				</ul>
			</div>
		</footer>
	);
};
