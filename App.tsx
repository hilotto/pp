import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './src/screens/StartScreen';
import MainScreen from './src/screens/MainScreen';
import ListScreen from './src/screens/ListScreen';
import ListScreen2 from './src/screens/ListScreen2';
import FlexionDetailScreen from './src/screens/FlexionDetailScreen';
import CameraWithOverlayScreen from './src/screens/CameraWithOverlayScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="List2" component={ListScreen2} />
        <Stack.Screen name="FlexionDetail" component={FlexionDetailScreen} />
        <Stack.Screen name="CameraWithOverlay" component={CameraWithOverlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}