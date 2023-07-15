import {NavLink} from "react-router-dom";
function MainNav() {
	return (
		<nav role="navigation" className="site-navigation" id="site-navigation">
			<ul className="nav-list" id="nav-list">
				<div className="navItemWrapper">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					{/* <li>
						<NavLink to="/about">About</NavLink>
					</li> */}
				</div>
				{/* TO DO: add links in page once I have HashLink working */}
			</ul>
		</nav>
	);
}
export default MainNav;
