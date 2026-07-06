import { PortalType } from "../../../config/portals";
import { getCurrentUser } from "../../../utils/currentUser";

import SuperAdminDashboard from "../portals/SuperAdminDashboard";
import PoliceDashboard from "../portals/PoliceDashboard";
import InsuranceDashboard from "../portals/InsuranceDashboard";
import VitelDashboard from "../portals/VitelDashboard";

function DashboardPage() {

    const user = getCurrentUser();

    const portal =
        user?.organization ?? PortalType.POLICE;

    switch (portal) {

        case PortalType.POLICE:
            return <PoliceDashboard />;

        case PortalType.INSURANCE:
            return <InsuranceDashboard />;

        case PortalType.VITEL:
            return <VitelDashboard />;

        case PortalType.SUPER_ADMIN:
        default:
            return <SuperAdminDashboard />;

    }

}

export default DashboardPage;