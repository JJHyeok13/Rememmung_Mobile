export interface PhotoDataProps {
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
