function Footer(props) {
	return (
		<footer className="pageFooter">
			<ul className="pageUL">
				<li>{props.myName}</li>
				<li>{props.email}</li>
				<li>{props.details}</li>
			</ul>
		</footer>
	);
}
export default Footer;
