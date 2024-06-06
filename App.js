import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AuthContextProvider from "./context/AuthContext";

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "bluviolet",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "Kullanıcı Giriş",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          headerTitle: "Kullanıcı Kayıt",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <NormalStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
