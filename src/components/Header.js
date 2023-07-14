import {NavLink} from "react-router-dom";

function Header(props) {
	return (
		<header>
			<a className="skip-link" href="#main-id">
				Skip Navigation Links
			</a>
			<h1 className="title">{props.title}</h1>
		</header>
	);
}
export default Header;
