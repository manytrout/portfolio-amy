// this whole file is a sort of a template to help me with how to make a 'database'
const posts = [
	{
		slug: "hello-world",
		projectType: "assignment",
		title: "Hello World",
		body: "This is the body of the coolest website you have ever seen.",
		// ,title_image:
		// image_reference /* todo there is a way to import image urls */,
	},
	{
		slug: "about-me",
		projectType: "assignment",
		title: "About Me",
		body: "My name is amy and I am the coolest.",
		// ,title_image: amy_is_cool /* todo there is a way to import image urls */,
	},
	{
		slug: "about-fun",
		projectType: "fun",
		title: "About Fun",
		body: "My name is Fun and I am the funnest.",
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
