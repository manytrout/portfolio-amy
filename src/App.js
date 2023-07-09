import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./scss/App.scss";

import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import Footer from "./components/Footer";
import Project from "./components/Project";
import PageProjects from "./pages/PageProjects";
import MainNav from "./components/MainNav";
import PageProject from "./pages/PageProject";
import PageNotFound from "./pages/PageNotFound";

function App() {
	return (
		<div className="App">
			<BrowserRouter path="/">
				<Header title="Amy Turton" />

				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/about" element={<PageAbout />} />
					<Route path="/projects" element={<PageProjects />} />
					<Route path="/:slug" element={<Project />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>

				<Footer
					// does the footer go inside or outside BrowserRouter?

					myName="Amy Turton"
					email="real@email.com"
					details="some stuff"
				/>
				<MainNav />
			</BrowserRouter>

			{/* <PageHome /> */}
		</div>
	);
}

export default App;
