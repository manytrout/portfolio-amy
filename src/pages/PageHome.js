import Tiles from "../components/Tiles";
import About from "../components/About";

function PageHome() {
	return (
		<main id="home-main main-id">
			{/* what if i made sections based on project type */}
			
			<section className="projectsSection">
				<h2>My work</h2>
				{/* TO DO: make H2 a variable */}
				<Tiles />
			</section>
			<About className="#about"/>
		</main>
	);
}

export default PageHome;
