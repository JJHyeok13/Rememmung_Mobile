import axios from "axios";

import { GetAxiosInstance, PostAxiosInstance } from "@axios/user/axios.method";
import { KakaoLoginResponse } from "@server/user/responseType/oauth";

export const getKakaoToken = async (
  client_id: string,
  redirect_uri: string,
  code: string
) => {
  const res = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );
  return res.data;
};

export const kakaoLogin = async (
  accessToken: string
): Promise<KakaoLoginResponse> => {
  try {
    const res = await PostAxiosInstance<KakaoLoginResponse>(`/api/auth/kakao`, {
      accessToken: accessToken,
    });
    return res.data;
  } catch (error) {
    console.log("카카오 로그인 에러", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const res = await GetAxiosInstance(`/logout`);

    return res.data;
  } catch (error) {
    console.log("로그아웃 에러", error);
    throw error;
  }
};
