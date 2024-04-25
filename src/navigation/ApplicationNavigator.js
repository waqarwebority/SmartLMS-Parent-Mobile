import React from 'react'
import {
    CardStyleInterpolators,
    createStackNavigator,
  } from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import AuthNavigator from './AuthNavigator';
const Stack = createStackNavigator();
const ApplicationNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      keyboardHidesTabBar: true,
    }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
    {/* { */}
    {/* //   state.userToken == null ? */}
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        {/* // : */}
        {/* <Stack.Screen name="StackNavigator" component={StackNavigator} /> */}
    {/* // } */}
  </Stack.Navigator>
  )
}

export default ApplicationNavigator