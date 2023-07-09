import PageHome from "../pages/PageHome";
import CallToAction from "./CallToAction";

function Project({
	slug,
	title,
	details,
	projectType,
	titleImage,
	titleImageAltText,
}) {
	return (
		<div className={`singleproject ${slug} ${projectType}`}>
			<h2 className="projectTitle">{title}</h2>
			<div className="projectDetails">{details}</div>
			<img
				className="projectPicture"
				src={titleImage}
				alt={titleImageAltText}
			/>
			{/* TO DO: fix slug so it doesn't bring me to the bottom of the home page */}
			<CallToAction slug="/" hardText="more info about " variableText={title} />
		</div>
	);
}

export default Project;
