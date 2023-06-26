import Tile from "./Tile";
import CallToAction from "./CallToAction";

function Projects(props) {
	return (
		// should I make a component that combines both tile and CTA and call it here?
		<section className="projectsSection">
			<h2>My projects</h2>
			<p>here's some project examples.</p>
			<ul className="project-grid">
			<li>
				<Tile projectName="capstone" />
				<CallToAction buttonText="capstone details" />
{/* link to capstone details page */}
			</li>
			<li>
				<Tile projectName="portfolio" />
				and this is my portfolio blurb
			</li>
			<li>
				<Tile projectName="calculator" />
				my little calculator blurb
			</li>
			<li>
				<Tile projectName="game" />
				my whack a mole game lol
			</li>
			<li>
				<Tile projectName="movie app" />
				and the movie app!
			</li>
			</ul>
		</section>
	);
}
export default Projects;
