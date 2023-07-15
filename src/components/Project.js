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
	// let { pageData } = useParams();
	// function getProjectSlug({slug}){
	// 	pageData = {slug};
	// }

	return (
		<div className={`singleProject ${slug} ${projectType}`}>
			<div className="projectFullDetails">
				<h2 className="projectTitle">{title}</h2>
				<div className="projectDetails">{details}</div>
				{/* <img
					className="projectPicture"
					src={titleImage}
					alt={titleImageAltText}
				/> */}
				{/* TO DO: add the commented out extra images to somewhere specific maybe*/}
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

				{/* DONE: fix slug so it doesn't bring me to the bottom of the home page */}
				<CallToAction
					slug="/"
					hardText="CTA pls"
					variableText={title}
				/>
			</div>
		</div>
	);
}

export default Project;
