import create from "zustand";
import { initialState } from "@/zustand/user/state";
import { UserType } from "@/DTO";
import { setLocalItems } from "@/utils";

interface UserState {
  userObj: UserType;
  setUserObj: (userObj: UserType) => void;
}

const useUserStore = create<UserState>((set) => ({
  userObj: initialState as UserType,
  setUserObj: (userObj: UserType) => {
    set({ userObj });
    setLocalItems("user", JSON.stringify(userObj));
  },
}));

export default useUserStore;
