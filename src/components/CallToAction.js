import {useState} from "react";
import Tile from "../components/Tile";

function CallToAction(props, handleClick) {
	function handleClick() {
		let message = "click handled";
		console.log(message);
		// click working but not doing anything yet. I want it to link to the given project page so add that to my ToDo
	}
	return (
		<div className="buttonContainer">
			<button typeof="button" className="ctaButton" onClick={handleClick}>
				{/* {props.buttonText} */}
				{/* {props.Tile} */}
				more about {props.buttonText}
			</button>
		</div>
	);
}
export default CallToAction;
