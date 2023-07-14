import CallToAction from "./CallToAction";

function Tile({slug, title, body, projectType, titleImage, titleImageAltText}) {
	return (
		<div
			className={`accordion-content singleTile project-grid ${slug} ${projectType}`}
		>
			{/* TO DO: Replace class: project-grid with something that makes more sense
			
				It sould have (or be) a link to a page with more details about the
				project if that makes sense. 
Consider: https://css-tricks.com/breakout-buttons/

<article class="box">
  <h1>A semantic, breakout button</h1>
  <p>This whole box is clickable, but still uses a button element, correctly. It also only behaves like this <i>if</i> JavaScript is available and working.</p>
  <button class="breakout-button" type="button" hidden>Say Hi 👋</button>
</article>

				To indicate that it's clickable it could also surge on mobile (how?)/ have a tracer around it on hover... */}

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
