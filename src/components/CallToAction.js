function CallToAction(props) {
	return (
		<div className="buttonContainer">
			<button typeof="button" className="ctaButton">
				{props.buttonText}
			</button>
		</div>
	);
}
export default CallToAction;
