import {Link} from "react-router-dom";

function HouseListItem({house}) {
	return (
		<li className="collection-item avatar red lighten-2">
			<img src={house.image} alt="House" className="circle"/>
			<span className="title">{house.address}</span>
			<p>
				Rooms: {house.rooms} <br/>
				Rent: {house.rent} <br/>
			</p>
			<p className="truncate">
				{house.description}
			</p>
			<Link to={`/houses/${house.id}`} className="secondary-content white-text"><i className="material-icons">edit</i></Link>
		</li>);
}

export default HouseListItem;
