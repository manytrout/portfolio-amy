import getPosts from "../data/projectData";
import Tile from "./Tile";

function Tiles() {
	//
	let posts = getPosts();

	let assignments = posts.filter((post) => {
		return post.projectType === "assignment";
	}); 
	let fun = posts.filter((post) => {
		return post.projectType === "fun";
	}); 
	return (
		<div className="projects-container">
			<div className="assignments-container">
				{assignments.map((singleProject, i) => {
					return <Tile key={i} {...singleProject} />;
				})}
			</div>
			<div className="fun-container">
				{fun.map((singleProject, i) => {
					return <Tile key={i} {...singleProject} />;
				})}
			</div>
		</div>
	);
}

export default Tiles;
