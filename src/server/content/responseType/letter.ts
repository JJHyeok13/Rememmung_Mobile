// 편지 생성하기 Response Body
export interface WriteLetterResponse {
  id: number;
  sourceId: number;
  from: string;
  title: string;
  content: string;
  isRead: boolean;
  createdAt: string;
}

// 편지 목록 조회하기 Response Body
export interface GetLetterListResponse {
  totalCount: number;
  totalPage: number;
  nodes: {
    id: number;
    sourceId: number;
    from: string;
    sourceName: string;
    title: string;
    content: string;
    isRead: boolean;
    createdAt: string;
  }[];
}

// 편지 상태 수정하기 Response Body
export interface UpdateLetterResponse {
  totalCount: number;
  nodes: {
    id: number;
    sourceId: number;
    from: string;
    sourceName: string;
    title: string;
    content: string;
    isRead: boolean;
    createdAt: string;
  }[];
}

// 편지 삭제하기 Response Body
export interface DeleteLetterResponse {}
