import {Link, Navigate, useParams} from "react-router-dom";

function CallToAction(props) {
	// function handleClick() {
	// 	let message = "click handled";
	// 	console.log(props.hardText);
	// 	// <PageProject />
	// }
	return (
		<div className="buttonContainer">
			{/* <button typeof="button" className="ctaButton" > */}
			{/* TO DO: remove all handleClick stuff once I'm fully done testing. */}
			{/* // onClick={handleClick} > */}
			<Link to={props.slug}>
				<button typeof="button">
					{props.hardText} {props.variableText}
				</button>
			</Link>
			{/* </button> */}
		</div>
	);
}
export default CallToAction;

// button animation inspired by https://reactgo.com/css-pulse-animation/
