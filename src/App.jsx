import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";

import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import { Hero } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";

function AppContent() {
	const location = useLocation();
	const isHome = location.pathname === "/";

	return (
		<>
			{!isHome && <Navbar />}

			<div
				className={`flex flex-col items-center justify-center min-h-screen py-16 px-4 
					${isHome ? "transition duration-500 ease-in-out transform backdrop-filter backdrop-blur-sm" : ""}`}
			>
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/blogs" element={<BlogList />} />
					<Route path="/blogs/:slug" element={<BlogPost />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>

			<Footer />
		</>
	);
}

export default function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}