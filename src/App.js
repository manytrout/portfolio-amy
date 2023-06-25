import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./scss/App.scss";

import Header from "./components/Header";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<BrowserRouter path="/">
				<Header title="amy page!!" />
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/about" element={<PageAbout />} />
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
