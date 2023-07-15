import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./scss/App.scss";

import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import PageProject from "./pages/PageProject";
import ScrollToTop from "./components/ScrollToTop";
import {APP_FOLDER_NAME} from "./globals/globalVariables";
import {HashLink, NavHashLink} from "react-router-hash-link";

function App() {
	return (
		<div className="App">
			<BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
				<Header title="Amy Turton" />
				{/* DONE: add a check on slugs so that page not found works as it should
					TO DO: add hash link so it can be parallax */}
				{/* <Route path="/about" element={<About />} /> */}
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/:slug" element={<PageProject />} />
				</Routes>

				<MainNav />
				<Footer
					myName="Amy Turton"
					email="mailto:aturton1@my.bcit.ca"
					details="2023"
				/>

				<ScrollToTop />
			</BrowserRouter>
		</div>
	);
}

export default App;
