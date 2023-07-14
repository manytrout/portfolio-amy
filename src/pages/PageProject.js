import {useState} from "react";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import Project from "../components/Project";
import {getPost} from "../data/projectData";
import PageNotFound from "./PageNotFound";

function PageProject() {
	let {slug} = useParams();
	const [data, setData] = useState();

	useEffect(() => {
		document.title = `${slug}`;
		setData(getPost(slug));
	}, [slug]);

	document.title = `${slug}`;

	if (data) {
		return (
			<main className="single-page single-project-page-container">
				<Project {...data} />
			</main>
		);
	} else {
		return <PageNotFound />;
	}
}
export default PageProject;
