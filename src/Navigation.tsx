import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './App';
import Login from './src/Login'; // if filename is Login.tsx // if filename is login.tsx

// Define the RootStackParamList to include type definitions for navigation
export type RootStackParamList = {
  Home: undefined;
  Details: { itemId?: number };
  NewScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}