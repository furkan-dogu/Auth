import { Alert, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({ isLogin }) {

    const navigation = useNavigation()

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false
    })

    const handleSubmit = (credentails) => {
        
        let { confirmEmail, confirmPassword, email, password } = credentails

        email = email.trim()
        password = password.trim()

        const emailIsValid = email.includes("@") && email.includes(".")
        const passwordIsValid = password.length > 6
        const emailsAreEqual = email === confirmEmail
        const passwordAreEqual = password === confirmPassword

        if(!emailIsValid || !passwordIsValid || (!isLogin && (!emailsAreEqual || passwordAreEqual))) {
            Alert.alert("Hatalı İşlem", "Lütfen girdiğiniz değerleri kontrol ediniz.")
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                confirmPassword: !passwordIsValid || !passwordAreEqual
            })
            return
        }
    }

    function switchScreen() {
        if(isLogin) {
            navigation.navigate("Signup")
        } else {
            navigation.navigate("Login")
        }
    }

  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} onsubmit={handleSubmit} credentialsInvalid={credentialsInvalid} />
      <View>
        <ButtonWhite onPress={switchScreen}>
            {isLogin ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"}
        </ButtonWhite>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blueviolet",
        marginTop: 50,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4
    }
})