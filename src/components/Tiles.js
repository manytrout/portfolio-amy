import getPosts from "../data/projectData";
import Tile from "./Tile";

function Tiles() {
	// accordion from https://dev.to/sababg/css-only-accordion-59db
	// TO DO: ask about accessibility suggestions
	let posts = getPosts();

	let assignments = posts.filter((post) => {
		return post.projectType === "assignment";
	});
	let fun = posts.filter((post) => {
		return post.projectType === "fun";
	});
	return (
		<div className="tiles-container">
			<div className="assignments-container accordion">
				<input type="checkbox" id="tab1" />
				<label className="accordion-label" htmlFor="tab1">
					Projects
				</label>
				{assignments.map((singleProject, i) => {
					return <Tile key={i} {...singleProject} />;
				})}
			</div>
			<div className="fun-container accordion">
				<input type="checkbox" id="tab2" />
				<label className="accordion-label" htmlFor="tab2">
					Fun
				</label>
				{fun.map((singleProject, i) => {
					return <Tile key={i} {...singleProject} />;
				})}
			</div>
		</div>
	);
}

export default Tiles;
