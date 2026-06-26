const api = {
    async login(email: string, password: string) {
        console.log("Mock login:", email, password);

        return {
            success: true,
            token: "mock-jwt-token",
            user: {
                id: "1",
                name: "Super Admin",
                email,
                role: "SUPER_ADMIN",
            },
        };
    },
};

export default api;