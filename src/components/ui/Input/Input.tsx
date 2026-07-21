import styles from "./Input.module.css";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

function Input({
    type = "text",
    placeholder,
    value,
    disabled = false,
    onChange,
}: InputProps) {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
    );
}

export default Input;