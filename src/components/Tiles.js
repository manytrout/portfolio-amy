import getPosts from "../data/coolDatabase";
import Tile from "./Tile";

function Tiles() {
	return (
		<div className="tiles-container">
			{getPosts().map((singleProject, i) => {
				return (
					<Tile
						key={i}
						slug={singleProject.slug}
						title={singleProject.title}
						body={singleProject.body}
						projectType={singleProject.projectType}
					/>
				);
			})}
		</div>
	);
}

export default Tiles;
