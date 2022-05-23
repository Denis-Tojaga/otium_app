import { AppState, LogBox, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import 'react-native-gesture-handler';
import { useFonts } from '@use-expo/font';

import SignInScreen from './src/screens/signin';
import SignUpScreen from './src/screens/signup';
import HomeScreen from './src/screens/home';
import AccountScreen from './src/screens/account';
import JobsScreen from './src/screens/jobs';
import useLogged from './src/hooks/useLogged';
import { useEffect } from 'react';

const loginFlow = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

const bottomTabFlow = createBottomTabNavigator({
  accountFlow: AccountScreen,
  homeFlow: HomeScreen,
  jobsFlow: JobsScreen
}, {
  initialRouteName: "homeFlow",
  tabBarOptions: {
    activeTintColor: "#EC216A",
    inactiveTintColor: "#14284D"
  }
});

const navigator = createSwitchNavigator({
  loginFlow: loginFlow,
  bottomTabFlow: bottomTabFlow
});


const AppContainer = createAppContainer(navigator);


//object containing all fonts 
const customFonts = {
  TrendaExtraLight: require("./assets/fonts/Trenda-ExtraLight.otf"),
  TrendaLightIt: require("./assets/fonts/Trenda-LightIt.otf"),
  TrendaLight: require("./assets/fonts/Trenda-Light.otf"),
  TrendaRegular: require("./assets/fonts/Trenda-Regular.otf"),
  TrendaSemiboldIt: require("./assets/fonts/Trenda-SemiboldIt.otf"),
  TrendaSemibold: require("./assets/fonts/Trenda-Semibold.otf")
}



export default function App() {
  const [isLoaded] = useFonts(customFonts);
  const { isLogged } = useLogged();

  useEffect(() => {
    LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  }, [])

  return (
    <AppContainer />
  );
}

