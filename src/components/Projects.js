import getPosts from "../data/projectData";
import Project from "./Project";

function Projects() {
	let posts = getPosts();
	return (
		<div className="projects-container">
			<div className="accordion">
			{posts.map((singleProject, i) => {
				return <Project key={i} {...singleProject} />;
			})}
			</div>
		</div>
	);
}

export default Projects;
