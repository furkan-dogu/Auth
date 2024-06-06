import { StyleSheet } from 'react-native'
import React from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'

const handleSignUp = async ({ email, password }) => {
  await createUser(email, password)
}

export default function SignUpScreen() {
  return (
    <AuthContent onAuthenticate={handleSignUp} />
  )
}

const styles = StyleSheet.create({})