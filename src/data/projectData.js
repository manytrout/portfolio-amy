import projectPicture from "../images/flowers-in-january.jpg";
import projectPicture01 from "../images/game/buzz-off-01-square.png";
import projectPicture02 from "../images/movie-app/movie-app.png";
import funPicture02 from "../images/calculator/calculator.png";

// this whole file is a sort of a template to help me make a fake 'database'
function getPost(slug) {
	// Replace this with a database lookup one day
	for (const post of getPosts()) {
		if (post.slug === slug) {
			return post;
		}
	}
}

function getPosts() {
	return posts;
}

const posts = [
	{
		slug: "buzz-off",
		projectType: "assignment",
		title: "Buzz Off!",
		body: (
			<div className="summary">
				<div>
					<p>
						Buzz Off! is the very first web app that I designed on
						my own. It's a Whack-a-Mole type browser game that I
						wrote in vanilla JavasScript over the course of a few
						weeks.
					</p>
				</div>
			</div>
		),
		details: (
			<div className="details">
				<p className="planning">
					I decided to do a Whack-a-Mole but since I've never actually
					played it before I had go through a lot of vague ideas
					before finally settling on a game where you shoo wasps away
					from a picnic. Then I had to decide how to actually make it
					into a game. I went through several cycles of breaking it
					down into progressively smaller chunks until I actually got
					something I could make progress on.
				</p>
				<p className="working">
					I'd have my debugger open basically all the time, with lots
					of breakpoints in my code -- possibly too many. As I
					finished chunks of my work I would get excited that I was
					closer to being done. But then I'd find a bug. Rinse and
					repeat. In hindsight it's kind of funny but it was pretty
					frustrating at the time.
				</p>
				<p className="challenges">
					I was really shaky with the concept of 'this' in JavaScript,
					but to have game that worked the way that I'd envisioned I
					had to push through with it. Another thing that I wanted to
					implement in this game was a class, which I did! And even
					though I didn't do much with the class itself, I learned a
					lot.
				</p>
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
		body: (
			<div className="summary">
				<p>
					A movie look-up app that calls the TMDb API to display movie
					posters, reviews, genres, and sorting options. This was a
					pair project developed with Kassandra Haftner.
				</p>
			</div>
		),
		details: (
			<div className="details">
				<p className="planning">
					We had each worked independently on a mockup for a movie
					database app prior to planning the actual development, so we
					chose which elements of each we'd keep. I did the initial
					setup in Create React App and made some components based on
					some of our previous work in React, and set up the git repo
					in GitHub.
				</p>
				<p className="working">
					My initial thoughts about which components we'd need and how
					they should be set up turned out to be overly complicated
					but it didn't take us long to re-work the structure. I did a
					most of plumbing, and Kassandra did almost all of the
					styling. We communicated well through the whole process, and
					we each took turns talking the other through various issues
					we encountered.
				</p>
				<p className="challenges">
					What were the most challenging things?
				</p>
			</div>
		),
		titleImage: projectPicture02,
		titleImageAltText: "A screenshot of the Movie Love React App",
	},
	{
		slug: "calculator",
		projectType: "fun",
		title: "ReactCalculator",
		body: (
			<div className="summary">
				<p>
					Calculator made in React, including memory buttons, square
					root, and other functions. Strictly speaking, this was a
					small assignment buuuuttt it was a lot of fun and it's when
					React started to click for me. learned a lot.
				</p>
			</div>
		),
		details: (
			<div className="details">
				<p className="planning">
					After making a display I started with the basic
					functionality: 0-9, arithmetic, equals, C and AC. My plan
					was to start on the memory functionality next but once I
					remembered the Math object in JavaScript I got some of that
					done first since it's got so much in common with the
					arithmetic functions. Once that was done I moved on to the
					memory keys and making the display work better.
				</p>
				<p className="working">
					As usual, I relied a lot the React dev tools -- soooo much
					console.log -- to help me test along the way
				</p>
				<p className="challenges">
					This isn't a technical challenge per-se, but it turns out
					that I'm not the only one in my class who had no idea what
					MS, MR, and MC on calculators stood for. It was cool to
					finally learn what it meant at the same time as I
					implemented that functionality! :D
				</p>
			</div>
		),
		titleImage: funPicture02,
		titleImageAltText: "A screenshot of my calculator app",
	},
	{
		slug: "capstone",
		projectType: "assignment",
		title: "Amazilia Acrescapers",
		body: (
			<div className="summary">
				<p>
					A wordpres-driven website for Amazalia Acrescapers, a
					landscaping and garden maintenance company providing
					services on Hawai'i (aka The Big Island).
				</p>
			</div>
		),
		details: (
			<div className="details">
				<p className="planning">
					break this up into stages? Working in a group of four to
					deliver several business requirements needed a lot of
					planning before we started working on anything remotely
					technical. Our first meeting happened before the project
					officially started, that's when agreed on some basics about
					how we'd keep one another on track. Once we started
					officially, we started using a shared Google Drive to
					collaborate on documents, share resources, and store assets.
					Next up we chose a communication platform -- we thought that
					Discord would be best since it's flexible and there is no
					license expiry to worry about. We used Figma to design the
					Information Architecture and Invision to do up some detailed
					wireframes; they're both so easy to use when collaborating
					remotely. We also used GitHub and an FTP client to share our
					code.
				</p>
				<p className="working">
					{" "}
					break this up into stages: WP plugins, Templates and
					verification of templates, test content, adding JS
					functionality to the gallery page, styling, etc.{" "}
				</p>
				<p className="challenges"></p>
			</div>
		),
		titleImage: projectPicture,
		titleImageAltText: "flowersssss",
	},
	//
	// TEMPLATE for projectData record
	// {
	// 	slug: "capstone",
	// 	projectType: "assignment",
	// 	title: "Amazilia Acrescapers",
	// 	body: (
	// 		<div className="summary">
	// 			<p></p>
	// 		</div>
	// 	),
	// 	details: (
	// 		<div className="details">
	// 			<p className="planning"></p>
	// 			<p className="working"></p>
	// 			<p className="challenges"></p>
	// 		</div>
	// 	),
	// 	titleImage: projectPicture,
	// 	titleImageAltText: "",
	// },
];

export default getPosts;
