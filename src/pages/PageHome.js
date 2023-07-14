import Tiles from "../components/Tiles";
import About from "../components/About";

function PageHome() {
	return (
		<main id="home-main">
			{/* what if i made sections based on project type */}
			<div className="intro main-id">
				<About className="#about" />
			</div>
			

			<div className="projectsContainer">
				<h2>My work</h2>
				{/* TO DO: make H2 a variable */}
				<Tiles />
			</div>
			{/* <About className="#about" /> */}
		</main>
	);
}

export default PageHome;
