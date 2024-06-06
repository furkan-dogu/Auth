import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import AuthContextProvider, { useAuthContext }  from "./context/AuthContext";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

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

function AfterAuthenticatedStack() {
  const { logout } = useAuthContext()
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
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Ana Sayfa",
          headerRight: ({ tintColor }) => (
            <Pressable style={({pressed}) => pressed && styles.pressed} onPress={logout}>
              <Ionicons name="exit" size={24} color={tintColor} />
            </Pressable>
          )
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { isAuthenticated } = useAuthContext()
  return (
    <NavigationContainer>
      {isAuthenticated ? <AfterAuthenticatedStack /> : <NormalStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5
  }
})