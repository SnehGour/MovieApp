import { createContext, useState } from "react"

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user,setUser] = useState({})
    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin,user,setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}