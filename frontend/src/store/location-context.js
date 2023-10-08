import React, { useEffect, useState } from "react";

const LocationContext = React.createContext({
	latitude: 27.62,
	longitude: 85.429,
	country: "nepal",
	countryCode: "NPL",
	city: "bhaktapur",

	onChangeLocation: (lat, lng) => {},
});

export const LocationContextProvider = (props) => {
	const [dataPos, setDataPos] = useState({
		latitude: 27.62,
		longitude: 85.429,
		country: "nepal",
		countryCode: "NPL",
		city: "bhaktapur",
	});

	const locationChangeHandler = (lat, lng) => {
		fetch(
			`https://api.geocode.earth/v1/reverse?api_key=ge-833ff4969a1ce1de&point.lat=${lat}&point.lon=${lng}`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setDataPos({
					latitude: lat,
					longitude: lng,
					country: data.features[0].properties.country,
					countryCode: data.features[0].properties.country_code,
					city: data.features[0].properties.county,
				});
			});
	};

	return (
		<LocationContext.Provider
			value={{
				latitude: dataPos.latitude,
				longitude: dataPos.longitude,
				country: dataPos.country,
				countryCode: dataPos.countryCode,
				city: dataPos.city,

				onChangeLocation: locationChangeHandler,
			}}
		>
			{props.children}
		</LocationContext.Provider>
	);
};

export default LocationContext;
