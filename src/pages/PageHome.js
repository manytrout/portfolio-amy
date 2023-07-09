import Tiles from "../components/Tiles";

function PageHome() {
	return (
		<main id="home-main main-id">
			{/* what if i made sections based on project type */}
			<section className="projectsSection">
				<h2>My projects</h2>
				<p>here's some project examples.</p>

				<Tiles />
			</section>
		</main>
	);
}

export default PageHome;
