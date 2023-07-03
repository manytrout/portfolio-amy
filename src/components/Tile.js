import CallToAction from "./CallToAction";

function Tile({slug, title, body, projectType, titleImage, titleImageAltText}) {
	return (
		<div className={`singleTile ${slug} ${projectType}`}>
			{/* It could have (or be) a link to a page with more details about the
				project if that makes sense. 
				To indicate that it's clickable it could also surge on mobile (how?)/ have a tracer around it on hover... */}
			<h2>{title}</h2>
			<p>{body}</p>
			<img className="picture" src={titleImage} alt={titleImageAltText} />
			<CallToAction buttonText={title} />
		</div>
	);
}
export default Tile;
