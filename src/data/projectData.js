import projectPicture from "../images/flowers-in-january.jpg";
import projectPicture01 from "../images/game/buzz-off-01-square.png";
import projectPicture02 from "../images/movie-app/movie-app.png";
import funPicture02 from "../images/calculator/calculator.png";

// this whole file is a sort of a template to help me with how to make a 'database'
function getPost(slug) {
	// Replace this with a database lookup one day
	for (const post of getPosts()) {
		if (post.slug === slug) {
			return post;
		}
	}
}

function getPosts() {
	// console.log(posts);
	return posts;
}

const posts = [
	{
		slug: "buzz-off",
		projectType: "assignment",
		title: "Buzz Off!",
		//body: "Vanilla JS game some text",
		body: (
			<div className="summary">
				<div>
					<p>Buzz Off! is the very first web app that I designed on my own. It's a Whack-a-Mole type browser game that I wrote in vanilla JavasScript over the course of a few weeks.</p>
				</div>
			</div>
		),
		details: (
			<div className="details">
				<p>I decided to do a Whack-a-Mole but since I've never actually played it before I had go through a lot of vague ideas before finally settling on a game where you shoo wasps away from a picnic. Then I had to decide how to actually make it into a game. I went through several cycles of breaking it down into progressively smaller chunks until I actually got something I could make progress on.</p>
			</div>
		),
		titleImage: projectPicture01,
		// lol don't put the imported image in curly braces...
		titleImageAltText:
			"Opening screen my javascript game called 'Buzz Off!'",
	},
	{
		slug: "movie-app",
		projectType: "assignment",
		title: "Movie Love",
		body: "A movie database application made in React as a pair project.",
		titleImage: projectPicture02,
		titleImageAltText: "A screenshot of the Movie Love React App",
	},
	{
		slug: "calculator",
		projectType: "fun",
		title: "ReactCalculator",
		body: "Calculator made in React, including memory buttons, square root, and other functions. Strictly speaking, this was a small assignment buuuuttt it was probably the most fun little assignment I had throughtout the program and I learned a lot.",
		titleImage: funPicture02,
		titleImageAltText: "A screenshot of my calculator app",
		anotherThing: {
			stuff1: "",
			stuff2: "",
		},
	},
	// {
	// 	slug: "",
	// 	projectType: "",
	// 	title: "",
	// 	body: "",
	// 	titleImage: projectPicture,
	// 	titleImageAltText: "",
	// },
];

export default getPosts;
