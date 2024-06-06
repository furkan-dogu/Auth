import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY

export const createUser = async (email, password) => {
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    })
}