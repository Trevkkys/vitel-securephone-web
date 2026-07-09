import { useEffect, useState } from "react";
import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import Toggle from "../../../../components/ui/Toggle/Toggle";
import { getPortalFromRole } from "../../../../utils/getPortalFromRole";
import {
    policePermissionGroups,
    insurancePermissionGroups,
    vitelPermissionGroups,
} from "../../../../config/permissions";

import {
    policeRoles,
    insuranceRoles,
    vitelRoles,
} from "../../../../config/roles";
import { getCurrentUser } from "../../../../utils/auth";
import { PortalType } from "../../../../config/portals";
import styles from "./RolesPage.module.css";

function RolesPage() {
    const user = getCurrentUser();

    const portal = getPortalFromRole(user?.role);

    const roles =
        portal === PortalType.POLICE
            ? policeRoles
            : portal === PortalType.INSURANCE
                ? insuranceRoles
                : portal === PortalType.VITEL
                    ? vitelRoles
                    : [];

    const permissionGroups =
        portal === PortalType.POLICE
            ? policePermissionGroups
            : portal === PortalType.INSURANCE
                ? insurancePermissionGroups
                : portal === PortalType.VITEL
                    ? vitelPermissionGroups
                    : [];

    const [selectedRole, setSelectedRole] =
        useState(roles[0]);

    const createPermissionMap = (
        role: typeof roles[number]
    ) => {
        const map: Record<string, boolean> = {};

        role.permissions.forEach((permission) => {
            map[permission] = true;
        });

        return map;
    };

    const [permissions, setPermissions] =
        useState(createPermissionMap(roles[0]));

    useEffect(() => {
        setSelectedRole(roles[0]);
        setPermissions(createPermissionMap(roles[0]));
    }, [portal]);

    const togglePermission = (
        permission: string
    ) => {
        setPermissions((prev) => ({
            ...prev,
            [permission]: !prev[permission],
        }));
    };

    return (
        <>
            <PageHeader
                title={
                    portal === PortalType.SUPER_ADMIN
                        ? "Platform Roles & Permissions"
                        : portal === PortalType.POLICE
                            ? "Police Roles & Permissions"
                            : portal === PortalType.INSURANCE
                                ? "Insurance Roles & Permissions"
                                : "Vitel Roles & Permissions"
                }
                description={
                    portal === PortalType.SUPER_ADMIN
                        ? "Manage platform-wide roles."
                        : portal === PortalType.POLICE
                            ? "Configure police user permissions."
                            : portal === PortalType.INSURANCE
                                ? "Configure insurance user permissions."
                                : "Configure Vitel staff permissions."
                }
            />

            <div className={styles.roleGrid}>
                {roles.map((role) => (
                    <div
                        key={role.name}
                        onClick={() => {
                            setSelectedRole(role);
                            setPermissions(
                                createPermissionMap(role)
                            );
                        }}
                        className={`${styles.roleCard} ${selectedRole.name === role.name
                            ? styles.activeRole
                            : ""
                            }`}
                    >
                        <h3>{role.name}</h3>

                        <p>{role.description}</p>

                        <div className={styles.roleFooter}>
                            <span>
                                {role.permissions.length}
                                {" "}Permissions
                            </span>

                            <span>
                                {role.users} Users
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.roleInfo}>
                <h2>{selectedRole.name}</h2>

                <p>{selectedRole.description}</p>
            </div>

            {permissionGroups.map((group) => (
                <div
                    key={group.module}
                    className={styles.permissionGroup}
                >
                    <div
                        className={styles.groupHeader}
                    >
                        <h3>{group.module}</h3>

                        <span>
                            {
                                group.permissions.filter(
                                    (permission) =>
                                        permissions[
                                        permission
                                        ]
                                ).length
                            }
                            {" / "}
                            {group.permissions.length}
                        </span>
                    </div>

                    {group.permissions.map(
                        (permission) => (
                            <div
                                key={permission}
                                className={
                                    styles.permissionRow
                                }
                            >
                                <span>
                                    {permission}
                                </span>

                                <Toggle
                                    checked={Boolean(
                                        permissions[
                                        permission
                                        ]
                                    )}
                                    onChange={() =>
                                        togglePermission(
                                            permission
                                        )
                                    }
                                />
                            </div>
                        )
                    )}
                </div>
            ))}

            <div className={styles.footer}>
                <Button>
                    Save Permissions
                </Button>
            </div>
        </>
    );
}

export default RolesPage;