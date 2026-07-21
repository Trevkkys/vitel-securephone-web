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
                role: "admin",
            });

            toast.success("Administrator created successfully.");

            navigate("/dashboard/users");

        } catch (error) {

            console.error(error);

            toast.error("Failed to create administrator.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <>

            <PageHeader
                title="Create Administrator"
                description="Create a new administrator account for the Vitel SecurePhone platform."
            />

            <div className={styles.container}>

                <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                >

                    <div className={styles.notice}>

                        <h3>Administrator Access</h3>

                        <p>

                            At this stage of the project only Administrator
                            accounts can be created. Additional user roles
                            will become available once role management is
                            completed.

                        </p>

                    </div>

                    <Input
                        placeholder="Email Address"
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

                    <div>

                        <label className={styles.label}>

                            Role

                        </label>

                        <select
                            disabled
                            className={styles.select}
                            value="admin"
                        >

                            <option>

                                Administrator

                            </option>

                        </select>

                    </div>

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
                                : "Create Administrator"}

                        </Button>

                    </div>

                </form>

            </div>

        </>

    );

}

export default CreateUserPage;