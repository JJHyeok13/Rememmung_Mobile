import { PostAxiosInstance, GetAxiosInstance } from "@axios/user/axios.method";
import { SavePetInfoRequest } from "@server/user/requestType/user";
import {
  GetPetInfoResponse,
  SavePetInfoResponse,
} from "@server/user/responseType/user";

// 온보딩 펫 정보 저장하기 /petInfo/save
export const savePetInfo = async (
  data: SavePetInfoRequest
): Promise<SavePetInfoResponse> => {
  try {
    console.log("온보딩 펫 정보 저장하기 호출");
    const res = await PostAxiosInstance<SavePetInfoResponse>(
      `/petInfo/save`,
      data
    );

    return res.data;
  } catch (error) {
    console.log("온보딩 펫 정보 저장하기 에러", error);
    throw error;
  }
};

// 온보딩 펫 정보 조회하기 /petInfo/get
export const getPetInfo = async () => {
  try {
    console.log("온보딩 펫 정보 조회하기 호출");
    const res = await GetAxiosInstance<GetPetInfoResponse>(`/petInfo/get`);

    return res;
  } catch (error) {
    console.log("온보딩 펫 정보 조회하기 에러", error);
    throw error;
  }
};

// 유저 정보 조회하기 /userInfo/get
export const getUserInfo = async () => {
  try {
    const res = await GetAxiosInstance(`/userInfo/get`);

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("유저 정보 조회하기 에러", error);
    throw error;
  }
};
