import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const BlogPost = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [post, setPost] = useState(null);
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await fetch("https://clarity-daily-blogs.netlify.app/blogs/blogPosts.json");
				const posts = await res.json();
				const foundPost = posts.find((p) => p.slug === slug);

				if (!foundPost) return;

				setPost(foundPost);

				const contentRes = await fetch(`https://clarity-daily-blogs.netlify.app/blogs/${foundPost.slug}.md`);
				setContent(await contentRes.text());
			} catch (error) {
				console.error("Error loading post:", error);
			}

			setLoading(false);
		};

		fetchPost();
	}, [slug]);

	if (loading) {
		return (
			<p className="border text-white text-center text-3xl font-extrabold border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto">
				Loading...
			</p>
		);
	}

	return (
		<section className="w-full max-w-4xl mx-auto">

			<button onClick={() => navigate(-1)} className="text-white text-lg border border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-2 mb-3 shadow-lg hover:bg-black/40">
				Back
			</button>

			<article className="border text-white border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-3 shadow-lg w-full max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold">{post.title}</h1>
				<div className="flex flex-wrap mt-2 gap-2">
					{post.tags?.map((tag, i) => (
						<span key={i} className="bg-gray-700/30 text-xs px-3 py-1 rounded-full uppercase tracking-wide">
							{tag}
						</span>
					))}
				</div>
			</article>

			<article className="border text-white border-black/20 bg-black/30 rounded-lg backdrop-blur-3xl p-6 mb-12 shadow-lg">
				<ReactMarkdown
					className="prose prose-invert mb-8 w-full max-w-4xl mx-auto"
					children={content}
					components={{
						code({ node, inline, className, children, ...props }) {
							const language = className?.replace("language-", "");
							return inline ? (
								<code {...props}>{children}</code>
							) : (
								<SyntaxHighlighter style={vscDarkPlus} language={language} PreTag="div">
									{String(children).replace(/\n$/, "")}
								</SyntaxHighlighter>
							);
						},
					}}
				/>
				<p className="text-gray-300 text-sm text-right">
					Written by {post.by} | Updated on {post.date}
				</p>
			</article>
		</section>
	);
};
