import PageHome from "../pages/PageHome";
import CallToAction from "./CallToAction";

function Project({
	slug,
	title,
	details,
	projectType,
	titleImage,
	titleImageAltText,
	detailImage01,
	detailImage01AltText,
	detailImage02,
	detailImage02AltText,
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
			<img
				className="projectPicture projectDetail01"
				src={detailImage01}
				alt={detailImage01AltText}
			/>
			<img
				className="projectPicture projectDetail02"
				src={detailImage02}
				alt={detailImage02AltText}
			/>

			{/* TO DO: fix slug so it doesn't bring me to the bottom of the home page */}
			<CallToAction
				slug="/"
				hardText="more info about "
				variableText={title}
			/>
		</div>
	);
}

export default Project;
