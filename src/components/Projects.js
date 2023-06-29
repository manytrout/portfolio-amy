import Tiles from "./Tiles";
import CallToAction from "./CallToAction";

function Projects(props) {
	return (
		// should I make a component that combines both tile and CTA and call it here?
		<section className="projectsSection">
			<h2>My projects</h2>
			<p>here's some project examples.</p>
			<Tiles />
			{/* <ul className="project-grid">
				<li>
					<Tiles projectName="capstone" />
					<CallToAction buttonText="capstone details" />
				</li>
				<li>
					<Tiles projectName="portfolio" />
					and this is my portfolio blurb
				</li>
				<li>
					<Tiles projectName="calculator" />
					my little calculator blurb
				</li>
				<li>
					<Tiles projectName="game" />
					my whack a mole game lol
				</li>
				<li>
					<Tiles projectName="movie app" />
					and the movie app!
				</li>
			</ul> */}
		</section>
	);
}
export default Projects;
