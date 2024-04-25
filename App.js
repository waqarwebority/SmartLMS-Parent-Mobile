import React from 'react'
import { StatusBar, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ApplicationNavigator from './src/navigation/ApplicationNavigator'


const App = () => {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
        <ApplicationNavigator />
      </NavigationContainer>
    </SafeAreaProvider>


  )
}

export default App