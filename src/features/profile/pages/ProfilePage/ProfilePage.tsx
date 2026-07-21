import { useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";

import { getCurrentUser } from "../../../../utils/currentUser";
import { updateProfile } from "../../../../services/profile.service";

import styles from "./ProfilePage.module.css";

function ProfilePage() {

    const user = getCurrentUser();

    const [fullName, setFullName] = useState(
        user?.full_name ?? ""
    );

    const [loading, setLoading] = useState(false);

    async function handleSave(
        e: React.FormEvent
    ) {

        e.preventDefault();

        if (loading) return;

        try {

            setLoading(true);

            const updatedUser =
                await updateProfile({
                    full_name: fullName,
                });

            localStorage.setItem(
                "vitel-user",
                JSON.stringify(updatedUser)
            );

            toast.success(
                "Profile updated successfully."
            );

            window.location.reload();

        } catch (error) {

            console.error(error);

            toast.error(
                "Unable to update profile."
            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <>

            <PageHeader
                title="My Profile"
                description="Manage your administrator profile."
            />

            <form
                className={styles.form}
                onSubmit={handleSave}
            >

                <div className={styles.card}>

                    <div className={styles.field}>
                        <label>Email Address</label>

                        <Input
                            value={user?.email ?? ""}
                            disabled
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Role</label>

                        <Input
                            value={user?.role ?? ""}
                            disabled
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Full Name</label>

                        <p className={styles.notice}>
                            Add your full name to complete your profile.
                        </p>

                        <Input
                            value={fullName}
                            placeholder="Enter your full name"
                            onChange={(e) =>
                                setFullName(e.target.value)
                            }
                        />
                    </div>

                </div>

                <div className={styles.actions}>

                    <Button
                        type="submit"
                    >

                        {loading
                            ? "Saving..."
                            : "Save Changes"}

                    </Button>

                </div>

            </form>

        </>

    );

}

export default ProfilePage;