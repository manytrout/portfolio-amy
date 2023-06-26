import Fun from "../components/Fun";
import Projects from "../components/Projects";

function PageHome() {
	return (
		<main id="main-id">
			<p>Home page content goes here.</p>
			<div className="portfolio-content">
				<Projects />
				<Fun />
			</div>
		</main>
	);
}

export default PageHome;
