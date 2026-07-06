import { PortalType } from "../../../config/portals";
import { getCurrentUser } from "../../../utils/currentUser";

import SuperAdminCases from "../portals/SuperAdminCases";
import PoliceCases from "../portals/PoliceCases";
import InsuranceClaims from "../portals/InsuranceClaims";
import VitelCases from "../portals/VitelCases";

function CasesPage() {

    const user = getCurrentUser();

    switch (user.organization) {

        case PortalType.POLICE:
            return <PoliceCases />;

        case PortalType.INSURANCE:
            return <InsuranceClaims />;

        case PortalType.VITEL:
            return <VitelCases />;

        case PortalType.SUPER_ADMIN:
        default:
            return <SuperAdminCases />;

    }

}

export default CasesPage;