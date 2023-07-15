function Header(props) {
	return (
		<header>
			<a className="skip-link" href="#main-id">
				Skip Navigation Links
			</a>
			<a href="https://amyturton.ca/">
				<h1 className="title">{props.title}</h1>
			</a>
		</header>
	);
}
export default Header;
