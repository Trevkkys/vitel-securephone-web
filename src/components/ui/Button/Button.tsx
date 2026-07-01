import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger";
}

function Button({
    children,
    type = "button",
    onClick,
    variant = "primary",
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;