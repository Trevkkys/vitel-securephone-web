import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";

import { createUser } from "../../../../services/user.service";

import styles from "./CreateOrganizationPage.module.css";

function CreateOrganizationPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("police");
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

            toast.success(
                "Organization administrator created successfully."
            );

            navigate("/dashboard/organizations");
        } catch (error) {
            console.error(error);

            toast.error(
                "Failed to create organization."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <PageHeader
                title="Create Organization"
                description="Create a new organization administrator."
            />

            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >

                <div className={styles.field}>
                    <label>Organization Type</label>

                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={styles.select}
                    >
                        <option value="police">Police</option>
                        <option value="insurance">Insurance</option>
                        <option value="vitel_staff">Vitel Operations</option>
                    </select>
                </div>

                <Input
                    placeholder="Administrator Email"
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
                            : "Create Organization"}
                    </Button>
                </div>
            </form>
        </>
    );
}

export default CreateOrganizationPage;