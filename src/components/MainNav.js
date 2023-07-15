import {NavLink} from "react-router-dom";
function MainNav() {
	return (
		<nav role="navigation" className="site-navigation" id="site-navigation">
			<ul className="nav-list" id="nav-list">
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	);
}
export default MainNav;
