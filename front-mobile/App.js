import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home/index';
import Login from './Login';
import Profile from './Profile/index'
import RecoverPassword from './RecoverPassword/index'
import Register from './Register/index'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: '', headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: '', headerShown: false }}
        />

       <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerTitle: '', headerShown: false }}
        />

         <Stack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{ headerTitle: '', headerShown: false }}
        />

          <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: '', headerShown: false }}
        />


     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
