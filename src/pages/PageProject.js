import { useEffect } from "react";
import {Link, Navigate, useParams} from 'react-router-dom';



function PageProject(){
    // let { slug } = useParams;

    // // useEffect(() =>{
    // //     document.title = `${slug}`
    // // },[slug])
    // console.log({slug})

    return (
		<main className="single-project-page-container">
            <p>put actual content here for a given project</p>
		</main>
	);

}
export default PageProject;


// use project title (OR SLUG) as end of URL (i think)
// this needs:
/* 
feature image
(maybe) image carousel
brief description
(accordion or tabbed) sections for:
* tools used
* process
    * planning, workflow, re-evaluation if necessary
* challenge & resolution
* code snippets with github gists
*/

/*
get to this page either directly  by URL 
OR
clicking on a tile
*/
