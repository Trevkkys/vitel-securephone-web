import styles from "./Header.module.css";
import { DEV_PORTAL } from "../../../config/devPortal";
import { PortalType } from "../../../config/portals";
import { FiBell } from "react-icons/fi";

function Header() {
    const portal = DEV_PORTAL;

    const welcomeText = {
        [PortalType.SUPER_ADMIN]:
            "Super Administrator",

        [PortalType.POLICE]:
            "Police Administrator",

        [PortalType.INSURANCE]:
            "Insurance Administrator",

        [PortalType.VITEL]:
            "Vitel Administrator",
    };

    return (
        <header className={styles.header}>

            <div>

                <h3 className={styles.title}>
                    Welcome back,
                </h3>

                <p className={styles.subtitle}>
                    {welcomeText[portal]}
                </p>

            </div>

            <button className={styles.notification}>
                <FiBell />
            </button>

        </header>
    );
}

export default Header;