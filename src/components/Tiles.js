import getPosts from "../data/projectData";
import Tile from "./Tile";

function Tiles() {

	let posts = getPosts();


	return (
			<div className="projects">
				{posts.map((singleProject, i) => {
					return <Tile key={i} {...singleProject} />;
				})}

		</div>
	);
}

export default Tiles;
// // TO DO: add accordion functionality back in once I figure out accessibiliy considerations

// // accordion from https://dev.to/sababg/css-only-accordion-59db

// 	let assignments = posts.filter((post) => {
// 	return post.projectType === "assignment";
// });
// let fun = posts.filter((post) => {
// 	return post.projectType === "fun";
// });

//  <div className="assignments-container accordion">
// 	<input type="checkbox" id="tab1" />
// 	<label className="accordion-label" htmlFor="tab1">
// 		Projects
// 	</label>
// 	{assignments.map((singleProject, i) => {
// 		return <Tile key={i} {...singleProject} />;
// 	})}
// </div>
// <div className="fun-container accordion">
// 	<input type="checkbox" id="tab2" />
// 	<label className="accordion-label" htmlFor="tab2">
// 		Fun
// 	</label>
// 	{fun.map((singleProject, i) => {
// 		return <Tile key={i} {...singleProject} />;
// 	})}
// </div> 