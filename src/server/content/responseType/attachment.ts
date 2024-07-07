// 첨부파일 업로드 Response Body
export interface UploadFileResponse {
  attachmentId: number;
  signedUrl: string;
}

// 첨부파일 업로드 상태 수정 Response Body
export interface UpdateUploadFileResponse {
  id: number;
  type: string;
  status: string;
  createdAt: string;
  url: string;
}
