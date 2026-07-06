import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

import DevicesPage from "../features/devices/pages/DevicesPage";
import CasesPage from "../features/cases/pages/CasesPage";
import CaseDetailsPage from "../features/cases/pages/CaseDetailsPage/CaseDetailsPage";
import AnalyticsPage from "../features/analytics/pages/AnalyticsPage";
import AuditLogsPage from "../features/audit/pages/AuditLogsPage";

import OrganizationsPage from "../features/organizations/pages/OrganizationsPage/OrganizationsPage";
import OrganizationOverviewPage from "../features/organizations/pages/OrganizationOverviewPage/OrganizationOverviewPage";
import OrganizationModulesPage from "../features/organizations/pages/OrganizationModulesPage/OrganizationModulesPage";
import OrganizationAdministratorPage from "../features/organizations/pages/OrganizationAdministratorPage/OrganizationAdministratorPage";
import OrganizationActivityPage from "../features/organizations/pages/OrganizationActivityPage/OrganizationActivityPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

import LiveTrackingPage from "../features/tracking/pages/LiveTrackingPage";
import GeoFencingPage from "../features/tracking/pages/GeoFencingPage";
import XTracPage from "../features/tracking/pages/XTracPage";
import MsisdnTrackingPage from "../features/tracking/pages/MsisdnTrackingPage";

import RecoveriesPage from "../features/recoveries/pages/RecoveriesPage/RecoveriesPage";
import UsersPage from "../features/users/pages/UsersPage/UsersPage";
import RolesPage from "../features/roles/pages/RolesPage/RolesPage";
import CustomersPage from "../features/customers/pages/CustomersPage";
import MonitoringPage from "../features/monitoring/pages/MonitoringPage";
import SupportPage from "../features/support/pages/SupportPage";

import ProtectedRoute from "../components/auth/ProtectedRoute";

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
    element: (
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
    ),
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
                path: "cases/:caseId",
                element: <CaseDetailsPage />,
            },
            {
                path: "organizations",
                element: <OrganizationsPage />,
            },
            {
                path: "organizations/:organizationId",
                element: <OrganizationOverviewPage />,
            },
            {
                path: "organizations/:organizationId/modules",
                element: <OrganizationModulesPage />,
            },
            {
                path: "organizations/:organizationId/administrator",
                element: <OrganizationAdministratorPage />,
            },
            {
                path: "organizations/:organizationId/activity",
                element: <OrganizationActivityPage />,
            },
            {
                path: "reports",
                element: <ReportsPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
            },
            {
                path: "analytics",
                element: <AnalyticsPage />,
            },
            {
                path: "audit-logs",
                element: <AuditLogsPage />,
            },
            {
                path: "tracking/live",
                element: <LiveTrackingPage />,
            },
            {
                path: "tracking/geofence",
                element: <GeoFencingPage />,
            },
            {
                path: "tracking/xtrac",
                element: <XTracPage />,
            },
            {
                path: "tracking/msisdn",
                element: <MsisdnTrackingPage />,
            },
            {
                path: "recoveries",
                element: <RecoveriesPage />,
            },
            {
                path: "users",
                element: <UsersPage />,
            },
            {
                path: "roles",
                element: <RolesPage />,
            },
            {
                path: "customers",
                element: <CustomersPage />,
            },
            {
                path: "monitoring",
                element: <MonitoringPage />,
            },
            {
                path: "support",
                element: <SupportPage />,
            },
        ],
    },
]);