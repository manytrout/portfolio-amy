import getPosts from "../data/projectData";
import Project from "./Project";

function Projects() {

    return (
		<div className="longproject-container">
			{getPosts().map((singleProject, i) => {
				return (
					<Project
						key={i}
						{...singleProject}
					/>
				);
			})}
		</div>
	);

}

export default Projects;
