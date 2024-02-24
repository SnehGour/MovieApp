import { createContext, useState } from "react"

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
            {props.children}
        </AuthContext.Provider>
    );
}