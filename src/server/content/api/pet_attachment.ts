import { GetAxiosInstance } from "@axios/content/axios.method";
import { GetPetFileResponse } from "@server/content/responseType/pet_attachment";

// 펫 첨부파일 조회 /users/me/pet-attachments
export const getPetFile = async (
  page: number,
  pageSize: number
): Promise<GetPetFileResponse> => {
  try {
    console.log("펫 첨부파일 조회 API 호출");
    const res = await GetAxiosInstance<GetPetFileResponse>(
      `/users/me/pet-attachments?page=${page}&pageSize=${pageSize}`
    );

    return res.data;
  } catch (error) {
    console.log("펫 첨부파일 조회 에러", error);
    throw error;
  }
};
