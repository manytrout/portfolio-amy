import Tile from "./Tile";
function Projects(props) {
	return (
		<section className="projectsSection">
			<p>here's some stuff about projects</p>
			<article>
				<Tile projectName="capstone" />
				this is my capstone blurb
			</article>
			<Tile projectName="portfolio" />
			<Tile projectName="calculator" />
			<Tile projectName="game" />
			<Tile projectName="movie app" />
		</section>
	);
}
export default Projects;
