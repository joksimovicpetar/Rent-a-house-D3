import {Link, NavLink} from "react-router-dom";

function Navbar() {
	return (<nav>
		<div className="nav-wrapper container">
			<Link to="/houses" className="brand-logo">Rent-a-house</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><NavLink exact to="/houses/new" activeClassName={"active"}>New house</NavLink></li>
				<li><NavLink exact to="/houses" activeClassName={"active"}>Houses</NavLink></li>
				<li><NavLink exact to="/rent" activeClassName={"active"}>Rent</NavLink></li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;
