import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../features/auth/pages/LoginPage";

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
]);