import React from 'react';

const LocationContext = React.createContext({
    latitude: 27.62,
    longitude: 85.429,
    country: "nepal",
    countryCode: "NPL",
    city: "bhaktapur",
});

export default LocationContext;