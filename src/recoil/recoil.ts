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
