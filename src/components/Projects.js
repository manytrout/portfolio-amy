import Tile from "./Tile";
function Projects(props) {
	return (
		<section className="projectsSection">
			<p>here's some stuff about projects</p>
			<article>
				<Tile projectName="capstone" />
				this is my capstone blurb
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
