import getPosts from "../data/projectData";
import Project from "./Project";

function Projects() {
	let posts = getPosts();
	return (
		<div className="longproject-container">
			{posts.map((singleProject, i) => {
				return <Project key={i} {...singleProject} />;
			})}
		</div>
	);
}

export default Projects;
