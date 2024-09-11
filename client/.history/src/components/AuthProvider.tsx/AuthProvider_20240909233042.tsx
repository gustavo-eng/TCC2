import { createContext, PropsWithChildren } from "react";

type AuthState = {
    authToken?: string | null;
    currentUser ?: any;
    handleLogin?: () => Promise<void>;
    handleLogout?: () => Promise<void>;
};


const AuthContext = createContext<AuthState | undefined>(undefined);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({children}: PropsWithChildren) {
    return (
        <AuthContext.Provider>
            {children}
    </AuthContext.Provider>
    )
}

