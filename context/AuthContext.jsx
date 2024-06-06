import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
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

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem("token")

            if(storedToken) {
                setAuthToken(storedToken)
            }
        }

        fetchToken()        
    }, [])
    

    const authenticate = (token) => {
        setAuthToken(token)
        AsyncStorage.setItem("token", token)
    }

    const logout = () => {
        setAuthToken(null)
        AsyncStorage.removeItem("token")
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