import Tiles from "./Tiles";
import CallToAction from "./CallToAction";

function Projects(props) {
	return (
		// should I make a component that combines both tile and CTA and call it here?
		<section className="projectsSection">
			<h2>My projects</h2>
			<p>here's some project examples.</p>
			<Tiles />

		</section>
	);
}
export default Projects;
