import { useContext } from "react";
import LocationContext from "../../store/location-context";

const Dummy = () => {
    const ctx = useContext(LocationContext);

    return <h1>{ctx.country}</h1>;
}

export default Dummy;