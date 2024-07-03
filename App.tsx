import React, { UIEventHandler } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Homescreen';
import GSscreen from './GSscreen';
import Helpscreen from './Helpscreen';
import Aboutscreen from './Aboutscreen';

export type RootStackPramList = {
  Home: undefined;
  GSscreen: undefined;
  Helpscreen: undefined;
  Aboutscreen: undefined
}

const Stack = createNativeStackNavigator<RootStackPramList>()
 

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            title: "Somnolence",
            headerTitleAlign: 'center'
          }}
        /> 
        <Stack.Screen
          name='GSscreen'
          component={GSscreen}
          options={{
            title: "Somnolence",
            headerTitleAlign: 'center'
          }}
        /> 
        <Stack.Screen
          name='Helpscreen'
          component={Helpscreen}
          options={{
            title: "Somnolence",
            headerTitleAlign: 'center'
          }}
        /> 
        <Stack.Screen
          name='Aboutscreen'
          component={Aboutscreen}
          options={{
            title: "Somnolence",
            headerTitleAlign: 'center'
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;