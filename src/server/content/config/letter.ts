// 편지 목록 조회하기 Config
export interface GetLetterListConfig {
  params: {
    page?: number;
    pageSize?: number;
    letterFilter: string;
    titleQuery?: string;
    contentQuery?: string;
    startData?: string;
    endDate?: string;
  };
}
