// src/screens/ResultScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// 네비게이션 파라미터 타입 정의
type RootStackParamList = {
  Result: { score?: number; angle?: number };
  Start: undefined; // 시작화면
  Main: undefined;  // 홈화면
  CameraWithOverlay: undefined; // 촬영화면
  // (다른 스크린 필요시 여기에 추가)
};

type ResultScreenProps = StackScreenProps<RootStackParamList, 'Result'>;

export default function ResultScreen({ navigation, route }: ResultScreenProps) {
  const score = route?.params?.score ?? 90;
  const angle = route?.params?.angle ?? 160;

  return (
    <View style={styles.container}>
      {/* 평가 결과 */}
      <Text style={styles.title}>평가 결과</Text>
      <View style={styles.box}>
        <Text style={styles.leftTxt}>각도 : {angle}°</Text>
        <Text style={styles.leftTxt}>
          유착된 근육 : 광배근, 소흉근, 사각근, 견갑하근{'\n\n'}
          약화된 근육 : 전거근, 하부승모근, 상부승모근, 회전근개(외회전)
        </Text>
        <Text style={styles.centerTxt}>당신의 관절 유연성</Text>
        <View style={styles.circleWrap}>
          <View style={styles.circle}>
            <Text style={styles.percent}>{score}%</Text>
          </View>
        </View>
      </View>

      {/* 하단 버튼 영역 */}
      <View style={styles.bottomBtnWrap}>
        <TouchableOpacity
          style={[styles.bottomBtn, { backgroundColor: '#72ACFF' }]}
          onPress={() => navigation.navigate('CameraWithOverlay')}
        >
          <Text style={styles.bottomBtnText}>다시 촬영하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomBtn, { backgroundColor: '#aaa' }]}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.bottomBtnText}>홈 화면으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-end' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, marginTop: 5 },
  box: {
    width: '85%',
    backgroundColor: '#c7e0ff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 100,
  },
  leftTxt: {
    fontSize: 16,
    color: '#222',
    marginBottom: 12,
    textAlign: 'left',
    width: '100%',
  },
  centerTxt: {
    fontSize: 16,
    color: '#222',
    marginBottom: 12,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
  circleWrap: { marginTop: 8, alignItems: 'center' },
  circle: {
    width: 90, height: 90, borderRadius: 45,
    borderWidth: 6, borderColor: '#185ce4',
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff',
  },
  percent: { fontSize: 26, color: '#185ce4', fontWeight: 'bold' },
  // 하단 버튼 스타일
  bottomBtnWrap: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  bottomBtn: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
  },
  bottomBtnText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});