import {Link, Navigate, useParams} from "react-router-dom";


function CallToAction(props) {
	// function handleClick() {
	// 	let message = "click handled";
	// 	console.log(props.hardText);
	// 	// <PageProject />
	// }
	return (
		<div className="buttonContainer">
			<button typeof="button" className="ctaButton" >
				{/* TO DO: remove all handleClick stuff once I'm fully done testing. */}
			{/* // onClick={handleClick} > */}
				<Link to={props.slug}>{props.hardText} {props.variableText}</Link>
			</button>
		</div>
	);
}
export default CallToAction;
