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

			<CallToAction hardText="shrimp" variableText={title} />
		</div>
	);
}

export default Project;
