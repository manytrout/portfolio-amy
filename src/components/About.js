// // TO DO: decide whether these should be pages or not. the commented out function and content below is just a copy of what's in PageAbout

function About() {
	return (
		<div className="aboutMe">
			<p className="education">
				Hi, I'm Amy! I'm an aspiring web developer. I earned my
				front-end web developer (FWD) certificate from BCIT in July of
				2023.
				{/* During the 7-month intensive program offered by BCIT I
				went from having almost no experience to making apps that called
				APIs! I started out small, making static websites as I learned
				to write HTML and CSS and progressed quickly to Sass,
				JavaScript/React, PHP, WordPress and e-commerce, specifically
				shopify and WooCommerce. */}
			</p>
			<p className="favourites">My favourites</p>
			<div className="codingFavourites">
				<span>HTML</span>
				<span>CSS</span>
				<span>JS</span>
				<span>React</span>
				<span>PHP</span>
				<span>SQL</span>
			</div>
			<p className="background">
				I had been doing application support for years and realized that
				I wanted to start making the kinds of applications that I'd been
				helping users with for so long. After checking out some job
				postings I realized that front-end development would be the
				perfect next step.
			</p>
			<p className="interests">
				When I'm not at my computer I'm as far away from it as I can
				get. Like a lot of Vancouverites, I spend as much time as I can
				in outside. Hiking {"("}not the intense kind{")"}, swimming,
				snowshoeing, or chilling on a blanket in the park. Ever since I
				was little I've loved to cook and bake for my friends and
				family.{" "}
			</p>
			<div className="arrowContainer">
				<svg
					className="arrow arrow-down"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="#808"
				>
					<path d="M18.2 7.6c-.4 0-.7.1-.9.4L13 12.6c-.5.5-1.4.5-1.9 0L6.8 8c-.3-.2-.6-.4-1-.4-1.1 0-1.7 1.3-.9 2.1l6.2 6.8c.5.6 1.4.6 1.9 0l6.2-6.8c.6-.8 0-2.1-1-2.1z"></path>
				</svg>
			</div>
		</div>
	);
}

export default About;
