// 펫 첨부파일 조회 Response Body
export interface GetPetFileResponse {
  totalCount: number;
  totalPage: number;
  nodes: {
    id: number;
    petId: number;
    attachment: {
      id: number;
      type: string;
      url: string;
      createdAt: string;
    };
  }[];
}
