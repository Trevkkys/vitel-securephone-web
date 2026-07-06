import { PortalType } from "../../../config/portals";

import SuperAdminDashboard from "../portals/SuperAdminDashboard";
import PoliceDashboard from "../portals/PoliceDashboard";
import InsuranceDashboard from "../portals/InsuranceDashboard";
import VitelDashboard from "../portals/VitelDashboard";

function DashboardPage() {

    const user = JSON.parse(
        localStorage.getItem("vitel-user") || "{}"
    );

    switch (user.organization) {

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