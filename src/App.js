import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./scss/App.scss";

import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import Footer from "./components/Footer";
import PageProjects from "./pages/PageProjects";

function App() {
	return (
		<div className="App">
			<BrowserRouter path="/">
				<Header title="Amy Turton" />
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/about" element={<PageAbout />} />
					<Route path="/projects" element={<PageProjects />} />
				</Routes>
			</BrowserRouter>

			{/* <PageHome /> */}
			<Footer
				myName="Amy Turton"
				email="real@email.com"
				details="some stuff"
			/>
		</div>
	);
}

export default App;
