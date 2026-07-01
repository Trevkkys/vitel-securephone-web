import { DEV_PORTAL } from "../../../config/devPortal";
import { PortalType } from "../../../config/portals";


import SuperAdminDashboard from "../portals/SuperAdminDashboard";
import PoliceDashboard from "../portals/PoliceDashboard";
import InsuranceDashboard from "../portals/InsuranceDashboard";
import VitelDashboard from "../portals/VitelDashboard";

function DashboardPage() {

    switch (DEV_PORTAL) {

        case PortalType.POLICE:
            return <PoliceDashboard />;

        case PortalType.INSURANCE:
            return <InsuranceDashboard />;

        case PortalType.VITEL:
            return <VitelDashboard />;

        default:
            return <SuperAdminDashboard />;
    }

}

export default DashboardPage;