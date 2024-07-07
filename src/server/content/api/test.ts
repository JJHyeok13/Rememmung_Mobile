import { GetAxiosInstance } from "@axios/content/axios.method";

export const test = async () => {
  console.log("Content 테스트");
  try {
    const res = await GetAxiosInstance(`/`);

    console.log("성공", res);
    alert("성공");
    return res.data;
  } catch (error) {
    console.log("실패", error);
    alert("실패");
    throw error;
  }
};
