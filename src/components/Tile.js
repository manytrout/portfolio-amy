import picture from "../images/flowers-in-january.jpg";
import getPosts from "../data/coolDatabase";

function Tile({slug, title, body, projectType}) {
		return (
			<div className={`singleTile ${slug} ${projectType}`}>
				{/* <h2>{props.projectName}</h2> */}
				{/* using this as a placeholder for testing. good lord react gets weird with images.  */}
				<img className="picture" src={picture} alt="some flowers" />
			This component <code> (Tile.js) </code>should be a cover image. also should be from the 'database' not the tile.
				{/* It could have (or be) a link to a page with more details about the
				project if that makes sense. 
				To indicate that it's clickable it could also surge on mobile (how?)/ have a tracer around it on hover... */}
				<ul>
					<li>{slug}</li>
					<li>{title}</li>
					<li>{body}</li>
				</ul>
			</div>
		);
	}
export default Tile;
