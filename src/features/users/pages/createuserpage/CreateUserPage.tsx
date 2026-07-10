import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";

import { createUser } from "../../../../services/user.service";

import styles from "./CreateUserPage.module.css";

function CreateUserPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);

            await createUser({
                email,
                password,
                role,
            });

            toast.success("User created successfully.");

            navigate("/dashboard/users");
        } catch (error) {
            console.error(error);
            toast.error("Failed to create user.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <PageHeader
                title="Create User"
                description="Create a new portal user."
            />

            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <Input
                    placeholder="User Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <Input
                    type="password"
                    placeholder="Temporary Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <select
                    className={styles.select}
                    value={role}
                    onChange={(e) =>
                        setRole(e.target.value)
                    }
                    required
                >
                    <option value="">
                        Select Role
                    </option>

                    <option value="admin">
                        Administrator
                    </option>

                    <option value="vitel_staff">
                        Vitel Staff
                    </option>

                    <option value="police">
                        Police
                    </option>

                    <option value="insurance">
                        Insurance
                    </option>
                </select>

                <div className={styles.actions}>
                    <Button
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </Button>

                    <Button type="submit">
                        {loading
                            ? "Creating..."
                            : "Create User"}
                    </Button>
                </div>
            </form>
        </>
    );
}

export default CreateUserPage;