// import MainNav from "./MainNav";
// Do I need a footer? (unsure, maybe) Does it have to be a component? (probably)

function Footer(props) {
	return (
		// check if all of this is undefined.
		<footer className="pageFooter">
			{/* <MainNav className="main-nav" /> */}
			<ul>
				{/* check if any of these are undefined */}
				<li>{props.myName}</li>
				<li>{props.email}</li>
				<li>{props.details}</li>
			</ul>
		</footer>
	);
}
export default Footer;
