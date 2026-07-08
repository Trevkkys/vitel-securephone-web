import { getCurrentUser } from "../../../utils/currentUser";
import { getPortalFromRole } from "../../../utils/getPortalFromRole";
import { PortalType } from "../../../config/portals";

import SuperAdminDashboard from "../portals/SuperAdminDashboard";
import PoliceDashboard from "../portals/PoliceDashboard";
import InsuranceDashboard from "../portals/InsuranceDashboard";
import VitelDashboard from "../portals/VitelDashboard";

function DashboardPage() {
    const user = getCurrentUser();

    const portal = getPortalFromRole(user?.role);

    switch (portal) {
        case PortalType.SUPER_ADMIN:
            return <SuperAdminDashboard />;

        case PortalType.POLICE:
            return <PoliceDashboard />;

        case PortalType.INSURANCE:
            return <InsuranceDashboard />;

        case PortalType.VITEL:
            return <VitelDashboard />;

        default:
            return <PoliceDashboard />;
    }
}

export default DashboardPage;