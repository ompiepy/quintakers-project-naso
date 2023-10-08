import { useContext, useEffect, useState } from "react";
import LocationContext from "../../../store/location-context";

const SearchSection = () => {
	const ctx = useContext(LocationContext);

	const [location, setLocation] = useState("");

	const handleInputChange = (event) => {
		if (event.key === "Enter") {
			setLocation(event.target.value);
		}
	};

	useEffect(() => {
		if (location === null || location.length === 0) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((geoloc) =>
					ctx.onChangeLocation(
						geoloc.coords.latitude,
						geoloc.coords.longitude
					)
				);
			}
		} else {
			fetch(
				`https://api.geocode.earth/v1/search?api_key=ge-833ff4969a1ce1de&text=${location}`
			)
				.then((response) => response.json())
				.then((data) => {
					ctx.onChangeLocation(
						data.features[0].geometry.coordinates[1],
						data.features[0].geometry.coordinates[0]
					);
				});
		}
	}, [location]);

	return (
		<div>
			<input
				type="text"
				placeholder="Enter your location"
				onKeyDown={handleInputChange}
			/>
		</div>
	);
};

export default SearchSection;
