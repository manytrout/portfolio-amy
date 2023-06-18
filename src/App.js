// import logo from "./logo.svg";
import "./styles/App.css";

import Header from "./components/Header";
import Tile from "./components/Tile";
import Projects from "./components/Projects";
import Fun from "./components/Fun";
import Footer from "./components/Footer";



function App() {
	return (
		<div className="App">
			<Header title="amy page!!" />

			{/* for each project in <wherever i have stored> my projects:
			display a tile with a representative image, that is a link to the page about the project itself */}
			{/* Moved to a Projects component for tidier app.js file. Will do the same for Fun Stuff/passion projects */}
			{/* <Tile projectName="game"/>
			<Tile projectName="calculator"/>
			<Tile projectName="movie app"/> */}
			<Projects />
			<Fun />
			{/* <Footer myName="Amy Turton" 
			email="real@email.com"
			details="some stuff"
			 /> */}
		</div>
	);
}

export default App;
