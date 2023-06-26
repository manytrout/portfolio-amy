import {NavLink} from "react-router-dom";
function MainNav() {
	return (
		<nav className="nav-list" id="nav-list">
			<ul>
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
