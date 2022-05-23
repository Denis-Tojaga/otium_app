import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import 'react-native-gesture-handler';

import SignInScreen from './src/screens/signin';
import SignUpScreen from './src/screens/signup';
import HomeScreen from './src/screens/home';
import AccountScreen from './src/screens/account';
import JobsScreen from './src/screens/jobs';
import useLogged from './src/hooks/useLogged';

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


const Container = createAppContainer(navigator);


export default function App() {

  const { isLogged } = useLogged();

  return (
    <Container />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
