import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";
import styles from "./LoginPage.module.css";
import logo from "../../../assets/images/vitel-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/auth.service";
import toast from "react-hot-toast";
import { getCurrentUser } from "../../../services/user.service";

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

        try {
            const data = await login(email, password);

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            const user = await getCurrentUser();

            localStorage.setItem(
                "vitel-user",
                JSON.stringify(user)
            );

            toast.success("Login successful!");

            navigate("/dashboard", {
                replace: true,
            });
        } catch (error) {
            console.error(error);
            toast.error("Invalid email or password.");
        } finally {
            setLoading(false);
        }
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