import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./scss/App.scss";

import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import PageProject from "./pages/PageProject";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div className="App">
			<BrowserRouter path="/">
				<Header title="Amy Turton" />
				{/* DONE: add a check on slugs so that page not found works as it should
					TO DO: add hash link so it can be parallax */}
				{/* <Route path="/about" element={<About />} /> */}
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/:slug" element={<PageProject />} />
				</Routes>
				<Footer
					myName="Amy Turton"
					email="real@email.com"
					details="some stuff"
				/>
				<MainNav />
				<ScrollToTop />
			</BrowserRouter>
		</div>
	);
}

export default App;
