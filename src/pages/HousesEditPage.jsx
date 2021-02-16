import M from "materialize-css/dist/js/materialize.min";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import * as service from "../services/houses.service";


function HousesPage() {
	const {id} = useParams();
	const history = useHistory();
	const [house, setHouse] = useState({});

	useEffect(() => {
		service.getById(id)
			.then(setHouse)
			.catch(() => {
				if (id !== "new"){
					history.replace("/houses/new");
				}
				setHouse({})
			});
	}, []);

	useEffect(() => {
		M.updateTextFields();
	}, [house]);

	const handleInput = ({currentTarget: input}) => {
		setHouse({...house, [input.name]: input.value});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (house.id) {
			service.update(house)
				.then(_house => {
					setHouse(_house);
					alert("Updated");
				});
		} else {
			service.save(house)
				.then(_house => {
					setHouse(_house);
					alert("Saved");
					history.replace("/houses");
				});
		}
	};

	const handleDelete = () => {
		service.deleteById(house.id)
			.then(()=> history.replace("/houses"));
	}

	return <div className="container">
		<form onSubmit={handleSubmit}>
			<div className="row">
				<div className="input-field col s12">
					<img style={{height: 200}} src={house.image}/>
					<input value={house.image}
					       onChange={handleInput}
					       name="image"
					       placeholder="image"
					       id="image"
					       type="text"/>
					<label htmlFor="image">Image</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<input value={house.address}
					       onChange={handleInput}
					       name="address"
					       placeholder="Address"
					       id="address"
					       type="text"/>
					<label htmlFor="address">Address</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<input value={house.rooms}
					       onChange={handleInput}
					       name="rooms"
					       placeholder="Rooms"
					       id="rooms"
					       type="text"/>
					<label htmlFor="rooms">Rooms</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<input value={house.rent}
					       onChange={handleInput}
					       name="rent"
					       placeholder="rent"
					       id="rent"
					       type="text"/>
					<label htmlFor="rent">Rent</label>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<textarea className="materialize-textarea"
					          value={house.description}
					          onChange={handleInput}
					          name="description"
					          placeholder="Description"
					          id="description"/>
					<label htmlFor="description">Description</label>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<button className="btn">Save</button>
					<br/>
					<button className="btn red" type="button" onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</form>
	</div>;
}

export default HousesPage;
