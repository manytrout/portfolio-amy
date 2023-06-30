// this whole file is a sort of a template to help me with how to make a 'database'
import projectPicture from "../images/flowers-in-january.jpg";

const posts = [
	{
		slug: "hello-world",
		projectType: "assignment",
		title: "Hello World",
		body: "This is the body of the coolest website you have ever seen.",
		titleImage: projectPicture,
		// lol don't put the imported image in curly braces...
		titleImageAltText: "some flowers",
	},
	{
		slug: "about-me",
		projectType: "assignment",
		title: "About Me",
		body: "My name is amy and I am the coolest.",
		titleImage: projectPicture,
		titleImageAltText: "some flowers",
	},
	{
		slug: "about-fun",
		projectType: "fun",
		title: "About Fun",
		body: "My name is Fun and I am the funnest.",
		titleImage: projectPicture,
		titleImageAltText: "some flowers",
	},
];

function getPost(slug, projectType) {
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

export default getPosts;
