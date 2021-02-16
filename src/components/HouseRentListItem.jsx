import {useState} from "react";
import * as service from "../services/houses.service";

function HouseRentListItem(props) {
	const [house, setHouse] = useState(props.house);
	const handleRent = () => {
		const rentedHouse = {...house, rented: !house.rented};
		service.update(rentedHouse)
			.then(setHouse);
	};


	return (
		<li className={"collection-item avatar red lighten-2 white-text" + (house.rented ? " rented" : "")}>
			<img src={house.image} alt="House" className="circle"/>
			<span style={house.rented ? {textDecoration: "line-through"} : {}} className="title">{house.address}</span>
			<p>
				Rooms: {house.rooms} <br/>
				Rent: {house.rented ? 0 : house.rent} <br/>
				Rented: {house.rented ? "Rented" : "Available"} <br/>
			</p>
			<p className="truncate">
				{house.description}
			</p>
			{house.rented ?
				<button onClick={handleRent} className="btn secondary-content white black-text">
					Withdraw
				</button>
				:
				<button onClick={handleRent} className="btn secondary-content white black-text">
					Offer
				</button>
			}
		</li>);
}

export default HouseRentListItem;
