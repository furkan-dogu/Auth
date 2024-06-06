import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY

const authenticate = async (mode, email, password) => {
    const res = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    })

    console.log(res.data)
}

export const createUser = async (email, password) => {
    return authenticate("signUp", email, password)
}

export const login = async (email, password) => {
    return authenticate("signInWithPassword", email, password)
}