import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Header from "../components/layout/Header/Header";

function DashboardLayout() {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <Sidebar />
            </aside>

            <main className={styles.main}>
                <header className={styles.header}>
                    <Header />
                </header>

                <section className={styles.content}>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}

export default DashboardLayout;