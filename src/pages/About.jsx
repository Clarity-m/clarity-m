import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

export const About = () => {
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchContent = async () => {
			try {
				const res = await axios.get("https://clarity-daily-blogs.netlify.app/about.md");
				setContent(res.data);
			} catch (error) {
				console.error("Error loading content:", error);
				setError(error.message);
			}

			setLoading(false);
		};

		fetchContent();
	}, []);

	if (loading) {
		return (
			<p className="border text-white text-center text-3xl font-extrabold border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto">
				Loading...
			</p>
		);
	}

	if (error) {
		return (
			<p className="border text-white text-center text-3xl font-extrabold border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto">
				Error: {error}
			</p>
		);
	}

	return (
		<section
			id="about"
			className="border text-white border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-12 w-full max-w-4xl mx-auto"
		>
			<ReactMarkdown className="prose prose-invert text-white w-full max-w-4xl mx-auto">
				{content}
			</ReactMarkdown>
		</section>
	);
};
