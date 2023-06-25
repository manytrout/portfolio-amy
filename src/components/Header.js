
import { NavLink } from "react-router-dom";

function Header(props) {
	return (
		<header>
			<h1>{props.title}</h1>
			<nav className="site-navigation" id="site-navigation">
				<ul className="nav-list" id="nav-list">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav>

		</header>
	);
}
export default Header;
