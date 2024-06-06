import { Alert, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from "../components/Loading"

export default function SignUpScreen() {
  
  const [isAuthenticating, setisAuthenticating] = useState(false)

  const handleSignUp = async ({ email, password }) => {
    setisAuthenticating(true)
    try {
      await createUser(email, password)
    } catch (error) {
      Alert.alert("Kayıt Olunamadı!", "Lütfen bilgilerinizi kontrol ediniz.")
    }
    setisAuthenticating(false)
  }

  if(isAuthenticating) {
    return <Loading message="Kullanıcı oluşturuluyor..." />
  }

  return (
    <AuthContent onAuthenticate={handleSignUp} />
  )
}

const styles = StyleSheet.create({})