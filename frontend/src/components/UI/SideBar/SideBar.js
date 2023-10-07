import { GoHomeFill } from "react-icons/go";
import { BsFillChatFill, BsCloudSnowFill } from "react-icons/bs";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { BiSolidUserCircle } from "react-icons/bi";

import styles from "./SideBar.module.css";

import logo from "../../../assets/logo.png";

const SideBar = () => {
	return (
		<ul className={styles["sidebar__wrapper"]}>
			<li className={styles["sidebar__items"]}>
				<img src={logo} width="50px" alt="Local Scan Logo" />
			</li>

			<div className={styles["sidebar__wrapper__main"]}>
				<li className={`${styles["sidebar__items"]} ${styles["sidebar__items--active"]}`}>
					<GoHomeFill size="30px" />
				</li>
				<li className={styles["sidebar__items"]}>
					<BsCloudSnowFill size="30px" />
				</li>
				<li className={styles["sidebar__items"]}>
					<RiSurgicalMaskFill size="30px" />
				</li>
				<li className={styles["sidebar__items"]}>
					<BsFillChatFill size="30px" />
				</li>
			</div>

			<li className={`${styles["sidebar__items"]} ${styles["sidebar__items--avatar"]}`}>
				<BiSolidUserCircle size="30px" />
			</li>
		</ul>
	);
};

export default SideBar;
