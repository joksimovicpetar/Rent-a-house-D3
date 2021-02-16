import {useEffect, useState} from "react";
import HouseRentListItem from "../components/HouseRentListItem";
import * as service from "../services/houses.service";

function HousesPage() {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		service.getAll()
			.then(setHouses);
	}, []);

	return <div className="container">
		<ul className="collection">
			{houses.map(house => <HouseRentListItem house={house}/>)}
		</ul>
	</div>;
}

export default HousesPage;
