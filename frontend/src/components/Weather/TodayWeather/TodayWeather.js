import { useContext } from "react";
import LocationContext from "../../../store/location-context";

import { FaLocationDot } from "react-icons/fa6";
import styles from "./TodayWeather.module.css";
import WeatherUpdate from "../WeatherUpdate/WeatherUpdate";

const TodayWeather = () => {
	const ctx = useContext(LocationContext);

	return (
		<div className={styles["wrapper"]}>
			<div className={styles["wrapper__info"]}>
				<p>
					<FaLocationDot />{" "}
					<span>
						{ctx.city.toUpperCase()}, {ctx.country.toUpperCase()}
					</span>
				</p>
				<p>
					<span>19</span>&deg;
				</p>
				<p>Rainy</p>
				<p>Feels like: 24&deg;</p>
			</div>

			<div className={styles["wrapper__messages"]}>
                <WeatherUpdate title="Haleys commet alert" msg="Haleys Comet is approaching in July 7, 2023. And this is exciting. Are you ready?" />
                <WeatherUpdate title="Haleys commet alert" msg="Haleys Comet is approaching in July 7, 2023. And this is exciting. Are you ready?" />
                <WeatherUpdate title="Haleys commet alert" msg="Haleys Comet is approaching in July 7, 2023. And this is exciting. Are you ready?" />
                <WeatherUpdate title="Haleys commet alert" msg="Haleys Comet is approaching in July 7, 2023. And this is exciting. Are you ready?" />
                <WeatherUpdate title="Haleys commet alert" msg="Haleys Comet is approaching in July 7, 2023. And this is exciting. Are you ready?" />
            </div>
		</div>
	);
};

export default TodayWeather;
