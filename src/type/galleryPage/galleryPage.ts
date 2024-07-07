export interface PhotoDataProps {
  totalCount: number;
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
