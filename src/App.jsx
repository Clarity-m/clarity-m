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
import { Qualification } from "./pages/Qualification";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Status } from "./pages/Status";
import { NotFound } from "./pages/NotFound";

function AppContent() {
	const location = useLocation();
	const isHome = location.pathname === "/";

	return (
		<>
			{!isHome && <Navbar />}

			<div
				className={`flex items-center justify-center min-h-screen py-16 px-4 overflow-hidden
					${isHome ? "transition duration-500 ease-in-out transform backdrop-filter backdrop-blur-sm backdrop-brightness-50" : ""}`}
			>
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/blogs" element={<BlogList />} />
					<Route path="/blogs/:slug" element={<BlogPost />} />
					<Route path="/qualification" element={<Qualification />} />
					<Route path="/services" element={<Services />} />
					<Route path="/status" element={<Status />} />
					<Route path="/about" element={<About />} />

					<Route path="*" element={<NotFound />} />
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