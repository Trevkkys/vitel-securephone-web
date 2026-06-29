import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

import DevicesPage from "../features/devices/pages/DevicesPage";
import CasesPage from "../features/cases/pages/CasesPage";
import DetectionPage from "../features/detection/pages/DetectionPage";
import InsurancePage from "../features/insurance/pages/InsurancePage";
import AnalyticsPage from "../features/analytics/pages/AnalyticsPage";
import AuditLogsPage from "../features/audit/pages/AuditLogsPage";

export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <LoginPage />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "devices",
                element: <DevicesPage />,
            },
            {
                path: "cases",
                element: <CasesPage />,
            },
            {
                path: "detection",
                element: <DetectionPage />,
            },
            {
                path: "insurance",
                element: <InsurancePage />,
            },
            {
                path: "analytics",
                element: <AnalyticsPage />,
            },
            {
                path: "audit-logs",
                element: <AuditLogsPage />,
            },
        ],
    },
]);