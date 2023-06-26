import {NavLink} from "react-router-dom";

function Header(props) {
	return (
		<header>
			<a className="skip-link" href="#main-id">
				Skip Navigation Links
			</a>
			<h1>{props.title}</h1>
			{/* <nav role="navigation" className="site-navigation" id="site-navigation">
				<ul className="nav-list" id="nav-list">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav> */}
		</header>
	);
}
export default Header;
