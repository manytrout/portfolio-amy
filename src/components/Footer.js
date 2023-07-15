function Footer(props) {
	let copyright = "\u00A9";
	return (
		<footer className="pageFooter">
			<ul className="pageUL">
				<li>{props.myName}</li>
				<li>
					{copyright} {props.details}
				</li>
				<li>
					<a href={`mailto:${props.email}`}>{props.email}</a>
				</li>
			</ul>
		</footer>
	);
}
export default Footer;
