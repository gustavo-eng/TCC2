import { createContext, PropsWithChildren, useContext } from "react";

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


export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context
}
