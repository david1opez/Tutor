import React, {useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as Device from 'expo-device';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {LogBox} from 'react-native';

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

//SCREENS
import HomeScreen from './src/screens/HomeScreen';
import TutorScreen from './src/screens/TutorScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MessagesScreen from './src/screens/MessagesScreen';


const Stack = createNativeStackNavigator();
const auth = getAuth();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) { setAuthenticated(true) }
      else { setAuthenticated(false) }
 
      setLoading(false);
    });
  }, []);

  const deviceModel = Device.modelName;


  let [fontsLoaded] = deviceModel == "SM-A705MN" ? 
    useFonts({
      Light: Poppins_300Light,
      Regular: Poppins_400Regular,
      Medium: Poppins_500Medium,
      SemiBold: Poppins_600SemiBold,
    }) :
    useFonts({
      Light: Poppins_300Light,
      Regular: Poppins_400Regular,
      Medium: Poppins_600SemiBold,
      SemiBold: Poppins_700Bold,
    });


  if (!fontsLoaded) {

    return <AppLoading />;

  } else {

    if(loading) {
      return <AppLoading />;
    }

    if(!authenticated) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tutor" component={TutorScreen} />
            <Stack.Screen name="Messages" component={MessagesScreen} />
          </Stack.Navigator>
      </NavigationContainer>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Tutor" component={TutorScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  }
}