import {
  GetAxiosInstance,
  PostAxiosInstance,
  PatchAxiosInstance,
  DeleteAxiosInstance,
} from "@axios/content/axios.method";
import { GetLetterListConfig } from "@server/content/config/letter";
import {
  UpdateLetterRequest,
  WriteLetterRequest,
} from "@server/content/requestType/letter";
import {
  WriteLetterResponse,
  GetLetterListResponse,
  UpdateLetterResponse,
  DeleteLetterResponse,
} from "@server/content/responseType/letter";

// 편지 생성하기 /users/me/letters
export const writeLetter = async (
  data: WriteLetterRequest
): Promise<WriteLetterResponse> => {
  try {
    console.log("편지 생성하기 API 호출");
    const res = await PostAxiosInstance<WriteLetterResponse>(
      `/users/me/letters`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("편지 생성하기 에러", error);
    throw error;
  }
};

// 편지 목록 조회하기 /users/me/letters
export const getLetterList = async (
  config: GetLetterListConfig
): Promise<GetLetterListResponse> => {
  try {
    console.log("편지 목록 조회하기 API 호출");

    const filteredParams = Object.entries(config.params).reduce(
      (acc, [key, value]) => {
        if (value) acc[key] = value;
        return acc;
      },
      {} as Record<string, any>
    );

    const res = await GetAxiosInstance<GetLetterListResponse>(
      `/users/me/letters`,
      { params: filteredParams }
    );
    return res.data;
  } catch (error) {
    console.log("편지 목록 조회하기 에러", error);
    throw error;
  }
};

// 편지 상태 수정하기 /users/me/letters/{letterId}
export const updateLetter = async (
  letterId: number,
  data: UpdateLetterRequest
): Promise<UpdateLetterResponse> => {
  try {
    console.log("편지 상태 수정하기 API 호출");
    const res = await PatchAxiosInstance<UpdateLetterResponse>(
      `/users/me/letters/${letterId}`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("편지상태 수정하기", error);
    throw error;
  }
};

// 편지 삭제하기 /users/me/letters/{letterId}
export const deleteLetter = async (
  letterId: number
): Promise<DeleteLetterResponse> => {
  try {
    console.log("편지 삭제하기 API 호출");
    const res = await DeleteAxiosInstance<DeleteLetterResponse>(
      `/users/me/letters/${letterId}`
    );

    return res.data.result;
  } catch (error) {
    console.log("편지 삭제하기 에러", error);
    throw error;
  }
};
