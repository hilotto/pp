import initializeAxios from "./baseInstance";

const apiInstance = initializeAxios.initializeAxios();

// 👇 file:// 보정 함수 추가
const getFileUri = (uri: string) => {
  if (uri.startsWith('file://')) return uri;
  return 'file://' + uri;
};

const UserAxios = {
  uploadImage: async (imageUri: string) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: getFileUri(imageUri), // <- 항상 file://로 보정!
        name: 'photo.jpg',         // 실제 파일명/확장자에 맞게 수정 가능
        type: 'image/jpeg',        // png면 image/png
      } as any);

      // 반드시 headers를 지정!
      const response = await apiInstance.post('analyze/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('이미지 업로드 실패: ' + String(error));
    }
  },

  // 기존 함수 (JSON 요청)
  getUser: async (data: any) => {
    try {
      const response = await apiInstance.post('analyze/', data);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  },
  getTest: async (data: any) => {
    try {
      const response = await apiInstance.post('test/', data);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  },
};

export default UserAxios;