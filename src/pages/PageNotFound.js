import {useEffect} from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
	useEffect(() => {
		document.title = `Page Not Found`;
	}, []);

	return (
		<main>
			<section className="single-page">
				<h2>404 ... : (</h2>
				<p>Page not found.</p>
				<p>
					Go to <Link to="/">Home</Link> page.
				</p>
			</section>
		</main>
	);
};

export default PageNotFound;
