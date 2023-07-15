import {Link, Navigate, useParams} from "react-router-dom";

function CallToAction(props) {
	return (
		<div className="buttonContainer">
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
