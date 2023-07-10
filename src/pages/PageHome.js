import Tiles from "../components/Tiles";
import About from "../components/About";

function PageHome() {
	return (
		<main id="home-main main-id">
			{/* what if i made sections based on project type */}
			<About />
			<section className="projectsSection">
				<h2>My projects</h2>
				<p>here's some project examples.</p>

				<Tiles />
			</section>
		</main>
	);
}

export default PageHome;
