import React, { useEffect, useState } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { BottomTabNavigator, Home, Login, Welcome } from '../screens/Index';


const Stack = createStackNavigator();

export default function AuthNavigator() {
  const [firstLaunch, setFirstLaunch] = useState(1);
  
//   useEffect(() => {
//     SplashScreen.hide()
//   }, [])
//   useEffect(() => {
//     (async () => {
//       const isFirstLaunch = await checkIfFirstLaunch();
//       setFirstLaunch(isFirstLaunch);
//     })();
//   }, []);
  if (firstLaunch == null) {
    // CommonLoading.show();
    return null;
  } else {
    return (
      <Stack.Navigator
        // initialRouteName={firstLaunch ? 'Welcome' : 'Welcome'}
        initialRouteName={firstLaunch ? 'Welcome' : 'Welcome'}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

        }}>

        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
     

      </Stack.Navigator>
    );
  }
}
