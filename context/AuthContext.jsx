import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({
    token: "",
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: () => {}
})

export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)

    const authenticate = (token) => {
        setAuthToken(token)
    }

    const logout = () => {
        setAuthToken(null)
    }

    const values = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate,
        logout
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContextProvider