// import {useState} from "react";
// import Tile from "../components/Tile";
// import PageProject from "../pages/PageProject";
// import {Link, Navigate, useParams} from "react-router-dom";

import PageProject from "../pages/PageProject";

function CallToAction(props) {
	function handleClick() {
		let message = "click handled";
		console.log(message);
		<PageProject />
	}
	return (
		<div className="buttonContainer">
			<button typeof="button" className="ctaButton" onClick={handleClick}>
				more about {props.buttonText}
			</button>
		</div>
	);
}
export default CallToAction;
