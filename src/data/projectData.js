import project_titleImage from "../images/flowers-in-january.jpg";
import project01titleImage from "../images/game/buzz-off-01-square.png";
import project01detailImage01 from "../images/game/buzz-off-02-square.png";
import project01detailImage02 from "../images/game/buzz-off-04-square.png";
import project02titleImage from "../images/movie-app/movie-app.png";
import funPicture02 from "../images/calculator/calculator.png";

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
		title: (<h3>Buzz Off!</h3>),
		body: (
			<div className="summary">
				<div>
					<p>
						{/* Buzz Off! is  */}
						The very first web app that I designed on
						my own. 
						{/* It's a Whack-a-Mole type browser game that I
						wrote in vanilla JavasScript over the course of a few
						weeks. */}
					</p>
				</div>
			</div>
		),
		details: (
			<div className="details">
				<p className="projectOverview">
					Buzz Off! is a Whack-a-Mole style game. The premise is that
					the player is tasked with a mission to protect picnic-goers
					from wasps; after 30 seconds to shoo wasps away, getting 1
					point for every wasp that has been successfully shoo'd. At
					the end of 30 seconds the player can choose to play again if
					they want to.
				</p>
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
				<div className="challenges">
					<p className="part01">
						My first challenge was more of a personal challenge than
						a technical one: I didn't want to follow tutorials
						because I know they don't help me actually learn. So I
						had to come up with a way to get this from an empty page
						with no interaction to a game without much reference
						material.
					</p>
					<p className="part02">
						My next challenge was I wanted to implement a class in
						this game because I had struggled with classes in the
						past, so I did! Then I wrote an <code>updateHTML</code>{" "}
						function and used it in combination with the{" "}
						<code>this</code> keyword to, well, update the relevant
						HTML as needed. Those two choices made it much easier
						for me to follow the data flow when I hit issues.
					</p>
				</div>
				<p className="learningOutcomes">
					At the end of this project I was much more comfortable with
					event listeners, timers, counters, and the <code>this</code>
					keyword. I didn't know it at the time but it led me to
					really appreciate all of the DOM updates you don't have to
					think about so much when writing javascript in React.
				</p>
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
		slug: "movie-app",
		projectType: "assignment",
		title: "Movie Love",
		body: (
			<div className="summary">
				<p>
					A movie look-up app made in React.
					{/* that calls the TMDb API to display movie
					posters, reviews, genres, and sorting options. This was a
					pair project developed with Kassandra Haftner. */}
				</p>
			</div>
		),
		details: (
			<div className="details">
				<p className="projectOverview">
					Movie Love is a basic web app developed using React. It lets
					users view the 25 movies at the top of the Top Rated, Now
					Playing, and Upcoming categories. Each movie has a card that
					has some basic data, a heart toggle button that connects to
					the user's Favourites list that's stored locally, and a View
					Details button to click into the given movie's page.
				</p>
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
					The first new challenge for me was figuring out how to
					connect to the TMDb API, and then how to actually get the
					data I wanted to actually show up -- accessing specific data
					from an object, what! I had to wrap my head around how{" "}
					<strong>props</strong> work too. Next up was learning how,
					when, and where to useState, useEffect, and useContext.
				</p>
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
				<p>
					Calculator made in React!
					{/* including memory buttons, square
					root, and other functions. Strictly speaking, this was a
					small assignment buuuuttt it was a lot of fun and it's when
					React started to click for me. */}
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
		slug: "amazilia-acrescapers",
		projectType: "assignment",
		title: "Amazilia Acrescapers",
		body: (
			<div className="summary">
				<p>
					A wordpres-driven website for Amazalia Acrescapers.
					{/* a landscaping and garden maintenance company providing
					services on Hawai'i (aka The Big Island). */}
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
		titleImage: project_titleImage,
		titleImageAltText: "flowersssss",
	},{
		slug: "short-sample",
		projectType: "assignment",
		title: "Short Sample For Testing",
		body: (
			<div className="summary">
				<p>
					A short sample
				</p>
			</div>
		),
		details: (
			<div className="details">
				<p className="planning">
					Short planning sample
				</p>
				<p className="working">
					short working sample
				</p>
				<p className="challenges"></p>
			</div>
		)
		// ,
		// titleImage: project_titleImage,
		// titleImageAltText: "flowersssss",
	}
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
