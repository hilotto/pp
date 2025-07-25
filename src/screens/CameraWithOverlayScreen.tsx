// src/screens/CameraWithOverlayScreen.tsx
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

export default function CameraWithOverlayScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [permissionChecked, setPermissionChecked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const camera = useRef<Camera>(null);

  const device = useCameraDevice('back');

  useEffect(() => {
    (async () => {
      const newStatus = await Camera.requestCameraPermission(); // 타입 자동 추론
      setHasPermission(newStatus === 'granted'); // ✅ 'authorized' → 'granted'로 수정
      setPermissionChecked(true);
    })();

    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!permissionChecked) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: '#fff' }}>카메라 권한 확인 중...</Text>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: '#fff' }}>카메라 장치를 찾을 수 없습니다.</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: '#fff', padding: 20, textAlign: 'center' }}>
          ❌ 카메라 권한이 허용되지 않았습니다.{'\n'}
          설정에서 카메라 접근 권한을 허용해주세요.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        video={true}
      />

      {showOverlay && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>
            📢 거울을 보며 동작을 시작하세요!{'\n'}
            끝에서 2초간 멈춰주세요.
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.captureButton}
        onPress={async () => {
          if (camera.current) {
            const photo = await camera.current.takePhoto({
              flash: 'off',
              enableShutterSound: false
            });
            console.log(photo.path);
            // 여기에 촬영된 사진을 처리하는 로직을 추가할 수 있습니다.
            // 예: navigation.navigate('PhotoPreview', { uri: photo.path });
          }
        }}
      >
        <Text style={styles.captureText}>촬영</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 30,
  },
  overlay: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
  },
  overlayText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
  },
  captureButton: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 30,
  },
  captureText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});