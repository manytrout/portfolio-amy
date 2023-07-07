import Fun from "../components/Fun";
import ProjectSummary from "../components/ProjectSummary";

function PageHome() {
	return (
		<main id="main-id">
			<p>Home page content goes here.</p>
			<div className="portfolio-content">
				<ProjectSummary />
			</div>
		</main>
	);
}

export default PageHome;
