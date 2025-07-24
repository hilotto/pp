// src/screens/FlexionDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';
import { StackNavigationProp } from '@react-navigation/stack';
import { launchCamera } from 'react-native-image-picker';

type RootStackParamList = {
  Start: undefined;
  Main: undefined;
  List: undefined;
  FlexionDetail: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'FlexionDetail'>;
};

export default function FlexionDetailScreen({ navigation }: Props) {
  // ✅ Start 버튼 클릭 시 카메라 실행
const handleStartCamera = () => {
  console.log('🔵 Start 버튼 눌림'); // ← 버튼 클릭 확인 로그
  launchCamera(
    {
      mediaType: 'video',
      cameraType: 'back',
      videoQuality: 'high',
    },
    (response) => {
      console.log('📷 카메라 응답:', response); // ← 실행 로그
      if (response.didCancel) {
        console.log('❌ 사용자가 카메라 실행을 취소했습니다.');
      } else if (response.errorCode) {
        console.error('🚨 카메라 실행 오류:', response.errorMessage);
      } else {
        console.log('✅ 녹화 시작 성공');
      }
    }
  );
};

  return (
    <View style={styles.container}>
      {/* 🔙 뒤로가기 */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../../assets/images/left.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Flexion</Text>
      <Text style={styles.subtitle}>(굽힘)</Text>

      {/* 🎥 영상 */}
      <Video
        source={require('../../assets/videos/flexion.mp4')}
        style={styles.video}
        resizeMode="contain"
        controls
      />

      {/* 📋 설명 */}
      <Text style={styles.instructionTitle}>Instructions(요령)</Text>

      {/* ✅ 중간 안내 문장 */}
      <Text style={styles.description}>
        영상을 따라 동작을 정확하게 수행하세요.{'\n'}
        팔을 옆구리에 대고 똑바로 선 후,{'\n'}
        시연처럼 팔을 앞으로 들어 올리세요.
      </Text>

      <View style={styles.instructions}>
        <Text style={styles.bullet}>1️⃣ 거울 앞에 앉으시고 카메라를 맞춰주세요.</Text>
        <Text style={styles.bullet}>2️⃣ 동작 내내 등을 똑바로 유지하시고 천천히 올려주세요.</Text>
        <Text style={styles.bullet}>3️⃣ 팔을 올릴 수 있는 최대 높이까지 들어 올리세요.</Text>
      </View>

      {/* 🔵 Start 버튼 */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartCamera}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, alignItems: 'center' },
  backButton: { position: 'absolute', top: 70, left: 20, zIndex: 2 },
  backIcon: { width: 30, height: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a1a1a', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#555' },
  video: { width: '88.4%', height: 250, marginVertical: 20 }, // ✅ 높이 키움
  instructionTitle: { fontSize: 22, fontWeight: 'bold', marginTop: 0 },
  description: {
    fontSize: 15,
    lineHeight: 26,
    color: '#444',
    marginTop: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  instructions: { paddingHorizontal: 30, marginTop: 10 },
  bullet: { fontSize: 17, lineHeight: 40, marginBottom: 8, color: '#333' },
  startButton: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#72ACFF',
    paddingVertical: 16,
    borderRadius: 30,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});