import CallToAction from "./CallToAction";

function Tile({slug, title, body, projectType, titleImage, titleImageAltText}) {
	return (
		<div
			className={`accordion-content singleTile project-grid ${slug} ${projectType}`}
		>

			<img
				className="projectPicture"
				src={titleImage}
				alt={titleImageAltText}
			/>
			<CallToAction
				className="CTA glow-button"
				slug={slug}
				hardText="more about"
				variableText={title}
			/>
			<div className="projectText">
				<h2 className="projectTitle">{title}</h2>
				<div className="projectBody">{body}</div>
			</div>
		</div>
	);
}

export default Tile;
