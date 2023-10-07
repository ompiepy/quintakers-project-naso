import Dummy from "./components/Dummy/Dummy";
import LocationContext from "./store/location-context";

const App = () => {
	return (
		<LocationContext.Provider
			value={{
				latitude: 27.67,
				longitude: 85.42,
				country: "nepal",
				countryCode: "NP",
				city: "bhaktapur",
			}}
		>
			<Dummy />
		</LocationContext.Provider>
	);
};

export default App;
