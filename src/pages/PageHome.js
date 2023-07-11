import Tiles from "../components/Tiles";
import About from "../components/About";

function PageHome() {
	return (
		<main id="home-main main-id">
			{/* what if i made sections based on project type */}
			<About />
			<section className="projectsSection">
				<h2>My work</h2>
				{/* TO DO: make H2 a variable */}
				<Tiles />
			</section>
		</main>
	);
}

export default PageHome;
