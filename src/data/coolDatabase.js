// this whole file is a sort of a template to help me with how to make a 'database'
const posts = [
    {
        slug: 'hello-world',
        title: 'Hello World',
        body: 'This is the body of the coolest website you have ever seen.',
        title_image: image_reference /* todo there is a way to import image urls */
    },
    {
        slug: 'about-me',
        title: 'About Me',
        body: 'My name is amy and I am the coolest.',
        title_image: amy_is_cool /* todo there is a way to import image urls */
    },
    {
        slug: 'buzz-off',
        title: 'Buzz Off!',
        subtitle: 'Vanilla JS whack-a-mole game',
            project_description: 'brief paragraph explaining the project',
            project_challenges: 'talk about early decisions, reqd features (timer), things I learned',
            project_tools: '',
            project_code_examples: '',
        title_image: buzz_off_feature_image /* todo there is a way to import image urls */
    },
    {
        slug: '',
        title: '',
        subtitle: '',
        project_description: 'brief paragraph explaining the project',
        project_challenges: 'talk about early decisions, reqd features (timer), things I learned',
        project_tools: '',
        project_code_examples: '',
    title_image: some_picture /* todo there is a way to import image urls */


    }
]



// Craig:
// function getPost(slug){
//     foreach(post in posts){
//         if(post.slug == slug){
//             return post;
//         }
//     }
// }

// Amy:
// posts.forEach(function(post){
//     return post;})

function getPosts(){
    return posts;
}