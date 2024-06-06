import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin, onsubmit }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  
  const handleSubmit = () => {
    onsubmit({
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword
    })
  }

  function updateInput(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
    
      case "password":
        setEnteredPassword(enteredValue)
        break
    
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue)
        break
    
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue)
        break
    }
  }

  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-adress"
        onUpdateValue={updateInput.bind(this, "email")}
        value={enteredEmail}
      />
      {!isLogin && (
        <Input
        label="Email'i Doğrula"
        keyboardType="email-adress"
        onUpdateValue={updateInput.bind(this, "confirmEmail")}
        value={enteredConfirmEmail}
      />
      )}
      <Input
        label="Şifre"
        secure
        onUpdateValue={updateInput.bind(this, "password")}
        value={enteredPassword}
      />
      {!isLogin && (
        <Input
        label="Şifre'i Doğrula"
        secure
        onUpdateValue={updateInput.bind(this, "confirmPassword")}
        value={enteredConfirmPassword}
      />
      )}
      <View style={styles.buttons}>
        <Button onPress={handleSubmit}>
            {isLogin ? "Giriş Yap" : "Kaydol"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10
    }
});
