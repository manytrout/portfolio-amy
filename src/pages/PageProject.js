import {useEffect} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import Project from "../components/Project";
import { getPost } from "../data/projectData";

function PageProject() {
	let {slug} = useParams();

	useEffect(() => {
		document.title = `${slug}`;
	}, [slug]);

    let data = getPost(slug)

    document.title = `${slug}`;

	return (
		<main className="single-project-page-container">
			<Project {...data} />
		</main>
	);
}
export default PageProject;