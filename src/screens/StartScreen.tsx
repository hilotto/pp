import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 네비게이션 경로 정의
type RootStackParamList = {
  Start: undefined;
  Main: undefined;
};

// 현재 화면에서 사용되는 네비게이션 prop 타입 정의
type StartScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Start'>;

// 컴포넌트 props 타입
type Props = {
  navigation: StartScreenNavigationProp;
};

export default function StartScreen({ navigation }: Props) {
  const goToMain = () => navigation.navigate('Main');

  return (
    <Pressable style={styles.container} onPress={goToMain}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.verticalTextContainer}>
          <Text style={styles.verticalChar}>자</Text>
          <Text style={styles.verticalChar}>세</Text>
          <Text style={styles.verticalChar}>공</Text>
          <Text style={styles.verticalChar}>주</Text>
        </View>

        <Image
          source={require('../../assets/images/princess.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.description}>
          올바른 자세를 알려주는{'\n'}마법의 거울
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    padding: 20,
  },
  verticalTextContainer: {
    position: 'absolute',
    top: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalChar: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
    lineHeight: 40,
  },
  image: {
    width: 180,
    height: 180,
    marginVertical: 40,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    position: 'absolute',
    bottom: 290,
  },
});