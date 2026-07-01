import { DEV_PORTAL } from "../../../config/devPortal";
import { PortalType } from "../../../config/portals";

import SuperAdminCases from "../portals/SuperAdminCases";
import PoliceCases from "../portals/PoliceCases";
import InsuranceClaims from "../portals/InsuranceClaims";
import VitelCases from "../portals/VitelCases";

function CasesPage() {

    switch (DEV_PORTAL) {

        case PortalType.POLICE:
            return <PoliceCases />;

        case PortalType.INSURANCE:
            return <InsuranceClaims />;

        case PortalType.VITEL:
            return <VitelCases />;

        default:
            return <SuperAdminCases />;

    }

}

export default CasesPage;