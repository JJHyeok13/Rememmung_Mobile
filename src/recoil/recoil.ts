import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface UserInfo {
  userName: string;
}

const { persistAtom } = recoilPersist();

export const loggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userInfo = atom<UserInfo>({
  key: "userInfo",
  default: {
    userName: "",
  },
  effects_UNSTABLE: [persistAtom],
});
