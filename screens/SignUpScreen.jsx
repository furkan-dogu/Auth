import { Alert, StyleSheet } from "react-native";
import React, { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../helpers/auth";
import Loading from "../components/Loading";
import { useAuthContext } from "../context/AuthContext";

export default function SignUpScreen() {
  const [isAuthenticating, setisAuthenticating] = useState(false);
  const { authenticate } = useAuthContext()

  const handleSignUp = async ({ email, password }) => {
    setisAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authenticate(token)
    } catch (error) {
      Alert.alert("Kayıt Olunamadı!", "Lütfen bilgilerinizi kontrol ediniz.");
    }
    setisAuthenticating(false);
  };

  if (isAuthenticating) {
    return <Loading message="Kullanıcı oluşturuluyor..." />;
  }

  return <AuthContent onAuthenticate={handleSignUp} />;
}

const styles = StyleSheet.create({});
