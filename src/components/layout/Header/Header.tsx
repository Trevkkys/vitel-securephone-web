import styles from "./Header.module.css";
import { FiBell } from "react-icons/fi";
import { getCurrentUser } from "../../../utils/currentUser";

function Header() {

    const user = getCurrentUser();

    return (
        <header className={styles.header}>

            <div>

                <h3 className={styles.title}>
                    Welcome back,
                </h3>

                <p className={styles.subtitle}>
                    {user.name}
                </p>

            </div>

            <button className={styles.notification}>
                <FiBell />
            </button>

        </header>
    );
}

export default Header;