import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Start: undefined;
  Main: undefined;
  List: undefined;
  List2: undefined;
};

type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

type Props = {
  navigation: MainScreenNavigationProp;
};

export default function MainScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* 🔙 StartScreen으로 이동하는 버튼으로 변경 */}
      <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.backButton}>
        <Image
          source={require('../../assets/images/left.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* 🔐 Login 텍스트 */}
      <Text style={styles.loginText}>Login</Text>

      {/* 🦴 해골 이미지 */}
      <Image
        source={require('../../assets/images/skeleton.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* 🔵🔴 관절 포인트 */}
      {/* 어깨 */}
      <TouchableOpacity onPress={() => navigation.navigate('List')} style={[styles.point, styles.blue, { top: 295, left: 108 }]} />
      <TouchableOpacity onPress={() => navigation.navigate('List2')} style={[styles.point, styles.red, { top: 295, right: 108 }]} />
      {/* 팔꿈치 */}
      <View style={[styles.point, styles.blue, { top: 400, left: 90 }]} />
      <View style={[styles.point, styles.red, { top: 400, right: 90 }]} />
      {/* 손목 */}
      <View style={[styles.point, styles.blue, { top: 490, left: 70 }]} />
      <View style={[styles.point, styles.red, { top: 490, right: 70 }]} />
      {/* 골반 */}
      <View style={[styles.point, styles.blue, { top: 490, left: 140 }]} />
      <View style={[styles.point, styles.red, { top: 490, right: 140 }]} />
      {/* 무릎 */}
      <View style={[styles.point, styles.blue, { top: 610, left: 150 }]} />
      <View style={[styles.point, styles.red, { top: 610, right: 150 }]} />
      {/* 발목 */}
      <View style={[styles.point, styles.blue, { top: 730, left: 150 }]} />
      <View style={[styles.point, styles.red, { top: 730, right: 150 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 65,
    left: 20,
    zIndex: 2,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  loginText: {
    position: 'absolute',
    top: 70,
    right: 20,
    fontSize: 18,
    color: '#000',
    zIndex: 2,
  },
  image: {
    width: 700,
    height: 700,
    marginTop: 50,
  },
  point: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    zIndex: 3,
  },
  red: {
    backgroundColor: '#fba1a1',
  },
  blue: {
    backgroundColor: '#aacbff',
  },
});