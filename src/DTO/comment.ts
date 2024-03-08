import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CommentType = {
  userImage: string | StaticImport;
  userName: string;
  revenue: string;
  text: string;
};
