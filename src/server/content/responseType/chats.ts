export interface SendChatResponse {}

// 채팅 내용 조회하기 Response Body
export interface GetChattingResponse {
  totalCount: number;
  totalPage: number;
  nodes: {
    id: number;
    chatRoomId: number;
    userId: string;
    content: string;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
    createdAt: string;
  }[];
}
