import CallToAction from "./CallToAction";

function Tile({slug, title, body, projectType, titleImage, titleImageAltText}) {
	return (
		<div className={`singleTile project-grid ${slug} ${projectType}`}>
			{/* TO DO: Replace class: project-grid with something that makes more sense
			
				It sould have (or be) a link to a page with more details about the
				project if that makes sense. 
Consider: https://css-tricks.com/breakout-buttons/

				To indicate that it's clickable it could also surge on mobile (how?)/ have a tracer around it on hover... */}
				
			<h2 className="projectTitle">{title}</h2>
			<div className="projectBody">{body}</div>
			<img
				className="projectPicture"
				src={titleImage}
				alt={titleImageAltText}
			/>
			<CallToAction buttonText={title} />
		</div>
	);
	
}

export default Tile;
