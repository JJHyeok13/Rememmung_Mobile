import {
  GetAxiosInstance,
  PostAxiosInstance,
} from "@axios/content/axios.method";
import { GetChattingConfig } from "@server/content/config/chats";
import { SendChatRequest } from "@server/content/requestType/chats";
import {
  GetChattingResponse,
  SendChatResponse,
} from "@server/content/responseType/chats";

// 채팅 내용 전송 /users/me/chat
export const sendChat = async (
  data: SendChatRequest
): Promise<SendChatResponse> => {
  try {
    console.log("채팅 내용 전송 API 호출");
    const res = await PostAxiosInstance<SendChatResponse>(
      `/users/me/chat`,
      data
    );

    return res.data.result;
  } catch (error) {
    console.log("채팅 전송 에러", error);
    throw error;
  }
};

// 채팅 내용 조회 /users/me/chats
export const getChatting = async (
  config: GetChattingConfig
): Promise<GetChattingResponse> => {
  try {
    console.log("채팅 내용 조회 API 호출");
    const res = await GetAxiosInstance<GetChattingResponse>(
      `/users/me/chats`,
      config
    );

    return res.data.result;
  } catch (error) {
    console.log("채팅 내용 조회 에러", error);
    throw error;
  }
};
