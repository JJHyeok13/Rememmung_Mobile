// 편지 생성하기 Request Body
export interface WriteLetterRequest {
  title: string;
  content: string;
}

// 편지 상태 수정하기 Request Body
export interface UpdateLetterRequest {
  isRead: boolean;
}
