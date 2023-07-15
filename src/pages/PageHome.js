import Tiles from "../components/Tiles";
import About from "../components/About";

function PageHome() {
	return (
		<main id="home-main">
			<div className="intro main-id">
				<About className="#about" />
			</div>

			<div className="projectsContainer">
				<h2>My work</h2>
				<Tiles />
			</div>
		</main>
	);
}

export default PageHome;
