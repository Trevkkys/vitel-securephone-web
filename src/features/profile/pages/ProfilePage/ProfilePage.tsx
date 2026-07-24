import { useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";

import { getCurrentUser } from "../../../../utils/currentUser";
import {
    updateProfile,
    changePassword,
} from "../../../../services/profile.service";

import styles from "./ProfilePage.module.css";

function ProfilePage() {

    const user = getCurrentUser();

    const [fullName, setFullName] = useState(
        user?.full_name ?? ""
    );

    const [loading, setLoading] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordLoading, setPasswordLoading] = useState(false);

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

            localStorage.setItem(
                "vitel-user",
                JSON.stringify(updatedUser)
            );

            toast.success("Profile updated successfully.");

            // refresh the page after a short delay
            setTimeout(() => {
                window.location.reload();
            }, 500);

        } catch (error) {

            console.error(error);

            toast.error(
                "Unable to update profile."
            );

        } finally {

            setLoading(false);

        }

    }

    async function handlePasswordChange(
        e: React.FormEvent
    ) {
        e.preventDefault();

        if (passwordLoading) return;

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        if (newPassword.length < 8) {
            toast.error(
                "Password must be at least 8 characters."
            );
            return;
        }

        try {
            setPasswordLoading(true);

            await changePassword({
                current_password: currentPassword,
                new_password: newPassword,
            });

            toast.success(
                "Password changed successfully."
            );

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error(error);
            toast.error(
                "Unable to change password."
            );
        } finally {
            setPasswordLoading(false);
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

            <form
                className={styles.form}
                onSubmit={handlePasswordChange}
            >

                <div className={styles.card}>

                    <h3 className={styles.sectionTitle}>
                        Change Password
                    </h3>

                    <div className={styles.field}>
                        <label>Current Password</label>

                        <Input
                            type="password"
                            value={currentPassword}
                            placeholder="Current password"
                            onChange={(e) =>
                                setCurrentPassword(e.target.value)
                            }
                        />
                    </div>

                    <div className={styles.field}>
                        <label>New Password</label>

                        <Input
                            type="password"
                            value={newPassword}
                            placeholder="New password"
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                        />
                    </div>

                    <div className={styles.field}>
                        <label>Confirm Password</label>

                        <Input
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm password"
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                        />
                    </div>

                </div>

                <div className={styles.actions}>

                    <Button type="submit">

                        {passwordLoading
                            ? "Changing..."
                            : "Change Password"}

                    </Button>

                </div>

            </form>

        </>

    );

}

export default ProfilePage;