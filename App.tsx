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
import MapScreen from './src/screens/map';
import DetailsScreen from './src/screens/details';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from './src/utils/theme/colors';
import { GlobalStateProvider } from './src/context/GlobalStateProvider';
import { Ionicons } from '@expo/vector-icons';


const loginFlow = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});


const homeFlow = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});
homeFlow.navigationOptions = {
  title: "Home",
  tabBarIcon: ({ tintColor }) => <AntDesign name="home" size={25} color={tintColor} />
}

const jobsFlow = createStackNavigator({
  Job: JobsScreen,
  Details: DetailsScreen
});
jobsFlow.navigationOptions = {
  title: "Jobs",
  tabBarIcon: ({ tintColor }) => <MaterialIcons name="work" size={24} color={tintColor} />
}



const accountFlow = createStackNavigator({
  Account: AccountScreen,
  Details: DetailsScreen
});
accountFlow.navigationOptions = {
  title: "Account",
  tabBarIcon: ({ tintColor }) => <Ionicons name="person" size={24} color={tintColor} />
}

const bottomTabFlow = createBottomTabNavigator({
  jobsFlow: jobsFlow,
  homeFlow: homeFlow,
  accountFlow: accountFlow,
}, {
  initialRouteName: "homeFlow",
  tabBarOptions: {
    activeTintColor: colors.accentColor,
    inactiveTintColor: 'black'
  }
});

const navigator = createSwitchNavigator({
  loginFlow: loginFlow,
  mapFlow: MapScreen,
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
  console.log('is logged -> ', isLoaded);

  useEffect(() => {
    LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  }, [])

  return (
    <GlobalStateProvider>
      <AppContainer />
    </GlobalStateProvider>
  );
}

