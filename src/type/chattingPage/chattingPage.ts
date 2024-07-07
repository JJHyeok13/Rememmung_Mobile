export interface ChattingDataProps {
  totalCount: number;
  nodes: {
    id: number;
    chatRoomId: number;
    userId: string | null;
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
