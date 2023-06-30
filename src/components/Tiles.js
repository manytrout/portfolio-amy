import getPosts from "../data/projectData";
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
						titleImage={singleProject.titleImage}
						titleImageAltText={singleProject.titleImageAltText}
					/>
				);
			})}
		</div>
	);
}

export default Tiles;
