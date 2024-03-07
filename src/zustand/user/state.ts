import { UserType } from "@/DTO";
import { getLocalItems } from "@/utils";

let user: UserType = {
  name: "",
  email: "",
};

// this is for prevent server side error
if (
  JSON.parse(getLocalItems("user") + "") != null &&
  JSON.parse(getLocalItems("user") + "") != ""
) {
  user = JSON.parse(getLocalItems("user") + "");
}

export const initialState: UserType = {
  ...user,
};
