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
		<div className={`singleProject ${slug} ${projectType}`}>
			<div className="projectFullDetails">
				<h2 className="projectTitle">{title}</h2>
				<div className="projectDetails">{details}</div>
				<div className="snapshotContainer">
					<img
						className="projectSnapshot projectDetail01"
						src={detailImage01}
						alt={detailImage01AltText}
					/>
					<img
						className="projectSnapshot projectDetail02"
						src={detailImage02}
						alt={detailImage02AltText}
					/>
				</div>
				<CallToAction
					slug="https://github.com/manytrout/"
					hardText="Check out my github repo!"
				/>
			</div>
		</div>
	);
}

export default Project;
