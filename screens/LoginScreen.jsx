import { Alert, StyleSheet } from 'react-native'
import { useState } from 'react'
import AuthContent from '../components/AuthContent'
import Loading from "../components/Loading"
import { login } from '../helpers/auth'
import { useAuthContext } from '../context/AuthContext'

export default function LoginScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false)
  const { authenticate } = useAuthContext()

  const handleLogin = async ({ email, password }) => {
    setisAuthenticating(true)
    try {
      const token = await login(email, password)
      authenticate(token)
    } catch (error) {
      Alert.alert("Giriş Yapılamadı!", "Lütfen bilgilerinizi kontrol ediniz.")
    }
    setisAuthenticating(false)
  }

  if(isAuthenticating) {
    return <Loading message="Kullanıcı giriş yapılıyor..." />
  }

  return (
    <AuthContent isLogin onAuthenticate={handleLogin} />
  )
}

const styles = StyleSheet.create({})