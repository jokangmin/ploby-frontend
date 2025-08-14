import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isLoggedIn: false,
    user: null as null | { id: string; name: string },
  },
});
