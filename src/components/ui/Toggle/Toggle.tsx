import styles from "./Toggle.module.css";

interface ToggleProps {
    checked: boolean;
    onChange: () => void;
}

function Toggle({
    checked,
    onChange,
}: ToggleProps) {
    return (
        <button
            type="button"
            onClick={onChange}
            className={`${styles.toggle} ${checked ? styles.on : styles.off
                }`}
        >
            <span className={styles.knob} />
        </button>
    );
}

export default Toggle;