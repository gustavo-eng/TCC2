import { createContext } from "react";

type AuthState = {
    authToken?: string | null;
    currentUser ?: any;
    handleLogin?: () => Promise<void>;
    handleLogout?: () => Promise<void>;
};


const AuthContext = createContext<AuthState | undefined>(undefined);


export default function AuthProvider() {
    return <AuthContext.Provider>

    </AuthContext.Provider>
}

