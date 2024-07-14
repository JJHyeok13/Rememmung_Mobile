import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userName = atom<string>({
  key: "userName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const petName = atom<string>({
  key: "petName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const basicPetImage = atom<string>({
  key: "basicPetImage",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

interface PetInfoProps {
  species: string;
  name: string;
  personality: string[];
  gender: string;
  birthday: string;
  farewellday: string;
  favorites: string[];
  dislike: string[];
  skill: string[];
}

export const PetInfo = atom<PetInfoProps>({
  key: "PetInfo",
  default: {
    species: "",
    name: "",
    personality: [],
    gender: "",
    birthday: "",
    farewellday: "",
    favorites: [],
    dislike: [],
    skill: [],
  },
});
