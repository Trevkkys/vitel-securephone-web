import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div>
                <h3>Welcome back</h3>
                <p>Super Admin</p>
            </div>

            <div className={styles.avatar}>
                SA
            </div>
        </div>
    );
}

export default Header;