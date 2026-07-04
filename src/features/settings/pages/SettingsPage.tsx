import { useState } from "react";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import Button from "../../../components/ui/Button/Button";
import styles from "./SettingsPage.module.css";

function SettingsPage() {
   const [settings, setSettings] = useState(() => ({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    twoFactor: true,
    darkMode: localStorage.getItem("theme") === "dark",
}));

    const toggle = (key: keyof typeof settings) => {
        setSettings((prev) => {
            const updated = {
                ...prev,
                [key]: !prev[key],
            };

            if (key === "darkMode") {
                if (updated.darkMode) {
                    document.documentElement.classList.add("dark");
                    localStorage.setItem("theme", "dark");
                } else {
                    document.documentElement.classList.remove("dark");
                    localStorage.setItem("theme", "light");
                }
            }

            return updated;
        });
    };

    return (
        <>
            <PageHeader
                title="Settings"
                description="Manage your platform preferences and security."
            />

            <div className={styles.grid}>

                <div className={styles.card}>
                    <h2>General</h2>

                    <label>Language</label>
                    <select>
                        <option>English</option>
                    </select>

                    <label>Timezone</label>
                    <select>
                        <option>(GMT+1) Lagos</option>
                    </select>
                </div>

                <div className={styles.card}>
                    <h2>Notifications</h2>

                    <SettingToggle
                        title="Email Notifications"
                        checked={settings.emailNotifications}
                        onClick={() => toggle("emailNotifications")}
                    />

                    <SettingToggle
                        title="SMS Notifications"
                        checked={settings.smsNotifications}
                        onClick={() => toggle("smsNotifications")}
                    />

                    <SettingToggle
                        title="Push Notifications"
                        checked={settings.pushNotifications}
                        onClick={() => toggle("pushNotifications")}
                    />
                </div>

                <div className={styles.card}>
                    <h2>Security</h2>

                    <SettingToggle
                        title="Two-Factor Authentication"
                        checked={settings.twoFactor}
                        onClick={() => toggle("twoFactor")}
                    />

                    <label>Session Timeout</label>

                    <select>
                        <option>15 Minutes</option>
                        <option>30 Minutes</option>
                        <option>1 Hour</option>
                    </select>
                </div>

                <div className={styles.card}>
                    <h2>Appearance</h2>

                    <SettingToggle
                        title="Dark Mode"
                        checked={settings.darkMode}
                        onClick={() => toggle("darkMode")}
                    />

                    <label>Accent Color</label>

                    <input
                        type="color"
                        defaultValue="#069494"
                    />
                </div>

                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <h2>System</h2>

                    <div className={styles.systemButtons}>
                        <Button>
                            Export Configuration
                        </Button>

                        <Button>
                            Download Logs
                        </Button>

                        <Button>
                            Backup Database
                        </Button>
                    </div>
                </div>

            </div>

            <div className={styles.footer}>
                <Button>
                    Save Changes
                </Button>
            </div>
        </>
    );
}

interface ToggleProps {
    title: string;
    checked: boolean;
    onClick: () => void;
}

function SettingToggle({
    title,
    checked,
    onClick,
}: ToggleProps) {
    return (
        <div className={styles.toggleRow}>
            <span>{title}</span>

            <button
                type="button"
                onClick={onClick}
                className={`${styles.toggle} ${
                    checked ? styles.active : ""
                }`}
            >
                <span />
            </button>
        </div>
    );
}

export default SettingsPage;