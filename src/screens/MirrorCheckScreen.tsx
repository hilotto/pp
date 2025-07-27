// src/screens/MirrorCheckScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  MirrorCheck: undefined;
  CameraWithOverlay: undefined;
  // ... 다른 스크린들
};

type Props = StackScreenProps<RootStackParamList, 'MirrorCheck'>;

export default function MirrorCheckScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
              {/* 🔙 왼쪽 상단 뒤로가기 버튼 */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/images/left.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* 맨 위 제목 */}
      <Text style={styles.title}>거울 유무 확인</Text>

      {/* 상단 텍스트 */}
      <Text style={styles.topText}>
        당신의 옆에 전신거울이 있다면{'\n'}(거울 클릭)
      </Text>
      <Text style={styles.arrow}>↓</Text>

      {/* 거울 아이콘 */}
      <TouchableOpacity
        style={styles.iconWrap}
        onPress={() => navigation.navigate('CameraWithOverlay')}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../assets/images/mirror.png')}
          style={styles.mirrorImg}
        />
      </TouchableOpacity>

      {/* 아래 텍스트 */}
      <Text style={styles.bottomText}>
        없다면..{'\n'}(아래 클릭)
      </Text>
      <Text style={styles.arrow}>↓</Text>

      {/* X 아이콘 */}
      <TouchableOpacity style={styles.iconWrap} onPress={() => { /* 여기에 필요한 로직! */ }}>
        <Image
          source={require('../../assets/images/mirror_x.png')}
          style={styles.xImg}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    paddingTop: 60, paddingBottom: 60, position: 'relative',
  },
  title: {
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    zIndex: 10,
  },
  topText: {
    fontSize: 21, fontWeight: 'bold', color: '#222', textAlign: 'center', marginBottom: 5, marginTop: 60,
  },
  arrow: {
    fontSize: 30, color: '#222', textAlign: 'center', marginVertical: 1,
  },
  iconWrap: {
    marginVertical: 2,
  },
  mirrorImg: {
    width: 200, height: 200, resizeMode: 'contain',
  },
  xImg: {
    width: 205, height: 205, resizeMode: 'contain',
  },
  bottomText: {
    fontSize: 19, color: '#222', textAlign: 'center', fontWeight: 'bold', marginTop: 35,
  },
  backBtn: {
  position: 'absolute',
  top: 70,
  left: 20,
  zIndex: 20,
},
backIcon: {
  width: 30,
  height: 30,
},
});