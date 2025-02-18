import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BlogList = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch("https://claryx-daily-blogs.netlify.app/blogs/blogPosts.json");
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}

			setLoading(false);
		};

		fetchPosts();
	}, []);

	if (loading) {
		return (
			<p className="border text-white text-center text-3xl font-extrabold border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto">
				Loading...
			</p>
		);
	}

	return (
		<section className="border text-white border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 w-full max-w-4xl mx-auto">
			<h1 className="text-4xl font-bold mb-8 text-center">Blogs List 📜</h1>

			{posts.length > 0 ? (
				posts.map(({ slug, title, date, tags }, index) => (
					<article key={index} className="border border-black/20 bg-black/40 rounded-xl p-6 mb-8 shadow-lg hover:bg-black/50 transition">

						<h2 className="text-2xl font-bold mb-2">
							<Link to={`/blogs/${slug}`} className="hover:text-gray-400 transition"> {title} </Link>
						</h2>

						<p className="text-gray-400 text-sm mb-2">{date}</p>
						<div className="flex flex-wrap gap-2 mt-2">
							{tags.map((tag, i) => (
								<span key={i} className="bg-gray-700/30 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
									{tag}
								</span>
							))}
						</div>

					</article>
				))) : (<p className="text-center text-gray-400">No blogs available.</p>)
			}
		</section>
	);
};
