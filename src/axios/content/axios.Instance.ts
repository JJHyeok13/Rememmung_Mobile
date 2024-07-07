import axios, { AxiosInstance } from "axios";
//import Cookies from "js-cookie";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_CONTENT_SERVER_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// JWT 토큰 기반 API 요청 => 주석 처리
// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const accessToken = localStorage.getItem("accessToken");

//     if (!accessToken) {
//       // 토큰이 없을 경우 로그아웃 처리
//       throw new Error("토큰 없음");
//     }

//     config.headers["Authorization"] = `Bearer ${accessToken}`;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // 토큰 관련 에러 처리
// axiosInstance.interceptors.response.use(
//   async (response) => {
//     return response;
//   },

//   async (error) => {
//     // 토큰 만료나 잘못된 토큰일 때 로그아웃 처리
//     if (error.response?.data?.code === 'AUTH_001') {
//       console.log('잘못된 토큰');
//       localStorage.removeItem('accessToken');
//     }

//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
