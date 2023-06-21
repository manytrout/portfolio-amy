import picture from "../images/flowers-in-january.jpg";

function Tile(props) {
	return (
		<div>
			<h2>{props.projectName}</h2>
			{/* using this as a placeholder for testing. good lord react gets weird with images.  */}
			<img className="picture" src={picture} alt="some flowers" />
			<p className="singleTile">
				This component <code> (Tile.js) </code>should be a cover image.
				It could have a link to a page with more details about the
				project if that makes sense.
			</p>
		</div>
	);
}
export default Tile;
