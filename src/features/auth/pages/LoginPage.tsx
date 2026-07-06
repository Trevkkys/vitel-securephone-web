import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";
import styles from "./LoginPage.module.css";
import logo from "../../../assets/images/vitel-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEMO_USERS } from "../../../config/demoUsers";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        const user = DEMO_USERS.find(
            (u) =>
                u.email.toLowerCase() ===
                    email.toLowerCase() &&
                u.password === password
        );

        if (!user) {
            setLoading(false);

            alert("Invalid email or password.");

            return;
        }

        await new Promise((resolve) =>
            setTimeout(resolve, 900)
        );

        localStorage.setItem(
            "vitel-user",
            JSON.stringify({
                email: user.email,
                name: user.name,
                organization: user.portal,
                role: "ADMIN",
            })
        );

        navigate("/dashboard");
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <img
                    src={logo}
                    alt="Vitel Logo"
                    className={styles.logo}
                />

                <h1 className={styles.title}>
                    Vitel SecurePhone 📱
                </h1>

                <p className={styles.subtitle}>
                    Sign in to continue
                </p>

                <form
                    className={styles.form}
                    onSubmit={handleLogin}
                >
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <div className={styles.loginButton}>
                        <Button type="submit">
                            {loading
                                ? "Signing in..."
                                : "Login"}
                        </Button>
                    </div>

                    <p className={styles.helpText}>
                        Need help?{" "}
                        <span className={styles.helpLink}>
                            Contact your administrator
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;