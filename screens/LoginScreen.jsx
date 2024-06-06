import { Alert, StyleSheet } from 'react-native'
import { useState } from 'react'
import AuthContent from '../components/AuthContent'
import Loading from "../components/Loading"
import { login } from '../util/auth'

export default function LoginScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false)

  const handleLogin = async ({ email, password }) => {
    setisAuthenticating(true)
    try {
      await login(email, password)
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