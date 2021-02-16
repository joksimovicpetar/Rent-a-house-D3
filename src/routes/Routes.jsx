import {Route, Switch} from "react-router";
import HousesEditPage from "../pages/HousesEditPage";
import HousesPage from "../pages/HousesPage";
import RentPage from "../pages/RentPage";


function Routes() {
	return (
		<Switch>
			<Route path="/houses/:id">
				<HousesEditPage/>
			</Route>
			<Route exact path="/rent">
				<RentPage/>
			</Route>
			<Route exact path="/houses">
				<HousesPage/>
			</Route>
			<Route>
				<HousesPage/>
			</Route>
		</Switch>
	);
};

export default Routes;
