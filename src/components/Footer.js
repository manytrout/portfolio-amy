function Footer(props) {
	let copyright = "\u00A9";
	return (
		<footer className="pageFooter">
			<ul className="pageUL">
				<li>{props.myName}</li>
				<li>
					{copyright} {props.details}
				</li>
				<li>{props.email}</li>
			</ul>
		</footer>
	);
}
export default Footer;
