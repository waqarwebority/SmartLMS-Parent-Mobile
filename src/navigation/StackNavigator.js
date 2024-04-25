import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from './BottomTabNavigator';
import { Home, Welcome } from '../screens/Index';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >

<Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Welcome" component={Welcome} />

  </Stack.Navigator>
  )
}

export default StackNavigator