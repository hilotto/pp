import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './src/screens/StartScreen';
import MainScreen from './src/screens/MainScreen';
import ListScreen from './src/screens/ListScreen';
import ListScreen2 from './src/screens/ListScreen2';
import FlexionDetailScreen from './src/screens/FlexionDetailScreen';
import CameraWithOverlayScreen from './src/screens/CameraWithOverlayScreen';
import ResultScreen from './src/screens/ResultScreen';
import MirrorCheckScreen from './src/screens/MirrorCheckScreen';
import FlexionDetailScreen2 from './src/screens/FlexionDetailScreen2';


// 1. 스택 네비게이션의 파라미터 타입 정의
export type RootStackParamList = {
  Start: undefined;
  Main: undefined;
  List: undefined;
  List2: undefined;
  FlexionDetail: undefined;
  FlexionDetail2: undefined;
  CameraWithOverlay: undefined;
  Result: { score?: number; angle?: number }; // 반드시 포함!
  MirrorCheck: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();  // 타입 명시!

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
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="MirrorCheck" component={MirrorCheckScreen} />
        <Stack.Screen name="FlexionDetail2" component={FlexionDetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}