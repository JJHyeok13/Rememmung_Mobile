export interface SavePetInfoResponse {
  body: "save";
}

export interface GetPetInfoResponse {
  id: number;
  species: string;
  name: string;
  personality: string[];
  gender: string;
  birthday: string;
  farewellday: string;
  favorites: string[];
  dislike: string[];
  skill: string[];
  createdAt: string;
  updatedAt: string;
}
