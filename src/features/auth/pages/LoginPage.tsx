import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";
import styles from "./LoginPage.module.css";
import logo from "../../../assets/images/vitel-logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("superadmin@vitel.com");
    const [password, setPassword] = useState("");

    const handleLogin = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        // Optional: only allow this email
        if (email !== "superadmin@vitel.com") {
            alert(
                "Use superadmin@vitel.com for the demo."
            );
            return;
        }

        localStorage.setItem(
            "vitel-user",
            JSON.stringify({
                email: "superadmin@vitel.com",
                role: "SUPER_ADMIN",
                name: "Super Admin",
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
                    Vitel SecurePhone📱
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

                    <Button type="submit">
                        Login
                    </Button>

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