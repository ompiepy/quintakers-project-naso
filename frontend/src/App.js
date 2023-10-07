import React from "react";

import SideBar from "./components/UI/SideBar/SideBar";
import LocationContext from "./store/location-context";

import "./App.css";
import HeroWrapper from "./components/UI/HeroWrapper/HeroWrapper";

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
      <React.Fragment>
        <SideBar />
        <HeroWrapper>
          niyoj hello
        </HeroWrapper>
      </React.Fragment>
		</LocationContext.Provider>
	);
};

export default App;
