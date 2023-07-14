import project_titleImage from "../images/flowers-in-january.jpg";
import project01titleImage from "../images/game/buzz-off-01-square.png";
import project01detailImage01 from "../images/game/buzz-off-02-square.png";
import project01detailImage02 from "../images/game/buzz-off-04-square.png";
import project02titleImage from "../images/movie-app/movie-app.png";
import funPicture02 from "../images/calculator/calculator.png";
import Gist from "super-react-gist";

// this whole file is a sort of a template to help me make a fake 'database'
export function getPost(slug) {
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
				<p>
					{/* Buzz Off! is  */}
					The very first JavaScript app that I wrote on my own.
					{/* It's a Whack-a-Mole type browser game that I
						wrote in vanilla JavasScript over the course of a few
						weeks. */}
				</p>
			</div>
		),
		details: (
			<div className="details">
				<hr />
				<div className="section1">
					<h3 className="projectOverview">Overview</h3>
					<p className="projectOverview">
						Buzz Off! is a Whack-a-Mole style game that I wrote in
						vanilla JavaScript. The player is given a mission to
						protect picnic-goers from wasps; after 30 seconds to
						shoo wasps away, getting a point for every wasp that has
						been successfully shoo'd. At the end of 30 seconds the
						player can choose to play again.
					</p>
					<h4>Planning</h4>
					<p className="planning">
						Confession: I hadn't actually played Whack-a-Mole before
						deciding to writing this game so I spent a lot of time
						trying other versions online to see what it was like.
						When I sat down to start actually working on it I went
						through several cycles of breaking it down into
						progressively smaller chunks until I actually got
						something I could make progress on.
					</p>
					<h4>Working</h4>
					<p className="working">
						From the minute I started my <code>game.js</code> file I
						had my debugger open any time I was working on it. I had
						lots of breakpoints -- possibly too many -- throughout
						my code to help me figure out the dataflow. As I
						finished chunks of my work I would get excited that I
						was closer to being done. But then I'd find a bug. Rinse
						and repeat. In hindsight it's kind of funny but it was
						pretty frustrating at the time.
					</p>
				</div>
				<hr />
				<h3 className="projectChallenges">Challenges</h3>
				<div className="challengeDetails">
					<h4>Challenge 1</h4>
					<p className="part01">
						My first challenge was more of a personal challenge than
						a technical one: I didn't want to follow tutorials
						because I know they don't help me actually learn. So I
						had to come up with a way to get this from an empty page
						with no interaction to a game without much reference
						material.
					</p>
					<h4>Challenge 2, 3, 4 etc.</h4>
					<p className="part02">
						I wanted to implement a class in this game because I had
						struggled with classes in the past, so I did! Then I
						wrote an <code>updateHTML()</code> function and used it
						in combination with the <code>this</code> keyword to,
						well, update the relevant HTML as needed. Those two
						choices made it much easier for me to follow the data
						flow when I hit issues.
					</p>
					<p>
						Here's <code>playTimer()</code> -- one of the functions
						from the game. It calls other functions that call other
						functions that... <br /> No wonder I had a hard time
						keeping track of things! Very thankful for dev tools.
					</p>
					<Gist url="https://gist.github.com/manytrout/245776fc5eadaea59c9c60d4b9e88268" />
				</div>
				<p className="learningOutcomes">
					At the end of this project I was much more comfortable with
					event listeners, timers, counters, and <code>this</code>{" "}
					keyword. I didn't know it at the time but it led me to
					really appreciate all of the DOM updates you don't have to
					think about so much when writing javascript in React.
				</p>
				<hr />
			</div>
		),
		titleImage: project01titleImage,
		// lol don't put the imported image in curly braces...
		titleImageAltText:
			"Opening screen my javascript game called 'Buzz Off!', with text text instructions about how to play and a button to start playing.",
		detailImage01: project01detailImage01,
		detailImage01AltText:
			"Play screen of my javascript game, with a countdown timer showing 29 (seconds), a points counter showing 0 Shoopoints, and a wasp near one of the picnic-goers",
		detailImage02: project01detailImage02,
		detailImage02AltText:
			"Play screen of my javascript game, with a countdown timer showing 7 (seconds), a points counter showing 6 Shoopoints, and a wasp on the face of one of the picnic-goers",
	},
	{
		slug: "movie-love",
		projectType: "assignment",
		title: "Movie Love",
		body: (
			<div className="summary">
				<p>
					A TMDb look-up app made in React.
					{/* that calls the TMDb API to display movie
					posters, reviews, genres, and sorting options. This was a
					pair project developed with Kassandra Haftner. */}
				</p>
			</div>
		),
		details: (
			<div className="details">
				<h3 className="projectOverview">Overview</h3>
				<div className="section1">
					<p>
						Movie Love is a basic web app that Kassandra Haftner and
						I wrote in React. It lets users view the 25 movies at
						the top of the <strong>Top Rated</strong>,{" "}
						<strong>Now Playing</strong>, and{" "}
						<strong>Upcoming</strong> categories. Each movie has a
						card that has some basic data, a heart toggle button
						that connects to the user's Favourites list that's
						stored locally, and a View Details button to click into
						the given movie's page.
					</p>
					<h4>Planning</h4>
					<p className="planning">
						We had each worked independently on a mockup for a movie
						database app prior to planning the actual development,
						so we chose which elements of each we'd keep. I did the
						initial setup in Create React App and made some
						components based on some of our previous work in React,
						and set up the git repo in GitHub.
					</p>
					<h4>Working</h4>
					<p className="working">
						Initially my thoughts about which components we'd need
						and how they should be set up turned out to be overly
						complicated but it didn't take us long to re-work the
						structure. I did a most of plumbing, and Kassandra did
						almost all of the styling. We communicated well through
						the whole process, and we each took turns talking the
						other through various issues we encountered.
					</p>
				</div>

				<h3>Challenges</h3>
				<div className="section1">
					<h4>Git/Github</h4>
					<p className="challenges">
						We were still fairly new to using Git/Github and due to
						the more complex nature of the project it took a bit
						more coordination. Luckily one of us is an early bird
						and the other is a night owl.
					</p>
					<h4>Using an API</h4>
					<p className="challenges">
						A new challenge for me was figuring out how to connect
						to the TMDb API, and then how to actually get the data
						we wanted to actually show up -- accessing specific data
						from an object, what! I had to wrap my head around how{" "}
						<strong>props</strong> work too. Next up was learning
						how, when, and where to <strong>useState</strong>,{" "}
						<strong>useEffect</strong>, and{" "}
						<strong>useContext</strong>.
					</p>
				</div>
			</div>
		),
		titleImage: project02titleImage,
		titleImageAltText: "A screenshot of the Movie Love React App",
	},
	{
		slug: "calculator",
		projectType: "fun",
		title: "React Calculator",
		body: (
			<div className="summary">
				<h3 className="projectOverview">Overview</h3>
				<p>
					Calculator I made in React!
					{/* including memory buttons, square
					root, and other functions. Strictly speaking, this was a
					small assignment buuuuttt it was a lot of fun and it's when
					React started to click for me. */}
				</p>
			</div>
		),
		details: (
			<div className="details">
				<div className="section1">
					<h3 className="projectOverview">Overview</h3>
					<p className="planning">
						After making a display I started with the basic
						functionality: 0-9, arithmetic, equals, C and AC. My
						plan was to start on the memory functionality next but
						once I remembered the Math object in JavaScript I got
						some of that done first since it's got so much in common
						with the arithmetic functions. Once that was done I
						moved on to the memory keys and making the display work
						better.
					</p>
				</div>
				<h4 className="projectOverview">Working</h4>
				<div className="section1">
					<p className="working">
						As usual, I relied a lot the React dev tools and soooo
						much console.log to help me test along the way.
					</p>
					<p className="challenges">
						This isn't a technical challenge per-se, but it turns
						out that I'm not the only one in my class who had no
						idea what MS, MR, and MC on calculators stood for. It
						was cool to finally learn what it meant at the same time
						as I implemented that functionality! :D
					</p>
				</div>
			</div>
		),
		titleImage: funPicture02,
		titleImageAltText: "A screenshot of my calculator app",
	},
	{
		slug: "amazilia-acrescapers",
		projectType: "assignment",
		title: "Amazilia Acrescapers",
		body: (
			<div className="summary">
				<p>
					A WordPress-driven website for Amazalia Acrescapers.
					{/* a landscaping and garden maintenance company providing
					services on Hawai'i (aka The Big Island). */}
				</p>
			</div>
		),
		details: (
			<div className="details">
				<h3 className="projectOverview">Overview</h3>
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
		titleImage: project_titleImage,
		titleImageAltText: "flowersssss",
	},
	{
		slug: "portfolio",
		projectType: "assignment",
		title: "My Portfolio",
		body: (
			<div className="summary">
				<p>This is where I plan to keep track of what I learn</p>
			</div>
		),
		details: (
			<div className="details">
				<h3 className="projectOverview">Overview</h3>
				<p className="planning">
					Lots of winging it! I wanted to spend more time using React
					so that's what I decided right off the bat. I decided to
					keep using Create React App because I had used it before, so
					I knew what to expect. My vision for this page is pretty
					different from how it looks now.
				</p>
				<div className="section1">
					<p className="working"></p>
				</div>
				<div className="section1">
					<p className="challenges"></p>
				</div>
			</div>
		),
		titleImage: project_titleImage,
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
	// 	titleImage: project_titleImage,
	// 	titleImageAltText: "",
	// },
];

export default getPosts;
