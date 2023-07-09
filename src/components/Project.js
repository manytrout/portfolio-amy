import CallToAction from "./CallToAction";

function Project({
	slug,
	title,
	details,
	projectType,
	titleImage,
	titleImageAltText,
}) {
	// return (
	// 	<div className={`wholeProject ${slug} ${title} `}>
	// 		<h2 className="projectTitle">{title}</h2>
	// 		<div className="projectBody">{details}</div>
	// 		<img
	// 			className="projectPicture"
	// 			src={titleImage}
	// 			alt={titleImageAltText}
	// 		/>
	// 		<CallToAction buttonText="check out my something" />
	// 	</div>
	// );
    <div className={`singleproject ${slug} ${projectType}`}>
    {/* TO DO: Replace class: project-grid with something that makes more sense
    
        It sould have (or be) a link to a page with more details about the
        project if that makes sense. 
Consider: https://css-tricks.com/breakout-buttons/

        To indicate that it's clickable it could also surge on mobile (how?)/ have a tracer around it on hover... */}

    <h2 className="projectTitle">{title}</h2>
    <div className="projectBody">{details}</div>
    <img
        className="projectPicture"
        src={titleImage}
        alt={titleImageAltText}
    />
    <CallToAction buttonText={title} />
</div>
// );
}
export default Project;
