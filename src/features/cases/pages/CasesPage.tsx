import { PortalType } from "../../../config/portals";
import { getCurrentUser } from "../../../utils/currentUser";
import { getPortalFromRole } from "../../../utils/getPortalFromRole";

import SuperAdminCases from "../portals/SuperAdminCases";
import PoliceCases from "../portals/PoliceCases";
import InsuranceClaims from "../portals/InsuranceClaims";
import VitelCases from "../portals/VitelCases";

function CasesPage() {
    const user = getCurrentUser();

    const portal = getPortalFromRole(user?.role);

    switch (portal) {
        case PortalType.SUPER_ADMIN:
            return <SuperAdminCases />;

        case PortalType.POLICE:
            return <PoliceCases />;

        case PortalType.INSURANCE:
            return <InsuranceClaims />;

        case PortalType.VITEL:
            return <VitelCases />;

        default:
            return <PoliceCases />;
    }
}

export default CasesPage;