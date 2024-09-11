type AuthState = {
    authToken?: string | null;
    currentUser ?: any;
    handleLogin?: () => Promise<void>;
    handleLogout?: () => Promise<void>;
};

