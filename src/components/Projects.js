import Tile from "./Tile";
import CallToAction from "./CallToAction";

function Projects(props) {
	return (
		// should I make a component that combines both tile and CTA and call it here?
		<section className="projectsSection">
			<h2>My projects</h2>
			<p>here's some project examples.</p>
			<article>
				<Tile projectName="capstone" />
				<CallToAction buttonText="capstone details" />
				{/* link to capstone details page */}
			</article>
			<article>
				<Tile projectName="portfolio" />
				and this is my portfolio blurb
			</article>
			<article>
				<Tile projectName="calculator" />
				my little calculator blurb
			</article>
			<article>
				<Tile projectName="game" />
				my whack a mole game lol
			</article>
			<article>
				<Tile projectName="movie app" />
				and the movie app!
			</article>
		</section>
	);
}
export default Projects;
