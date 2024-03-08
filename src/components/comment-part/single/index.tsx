import React from "react";
import Image from "next/image";
import { CommentType } from "@/DTO";
import "./style.scss";

export const SingleComment: React.FC<{ commentObject: CommentType }> = ({
  commentObject,
}) => {
  return (
    <div className={"flex flex-col p-4 border h-full w-full rounded-md gap-3"}>
      <div className={"flex flex-row gap-2 items-center"}>
        <Image
          src={commentObject.userImage}
          alt={"user image"}
          className={"object-contain"}
        />
        <div className={"flex flex-col"}>
          <span className={"text-custom-blue1 font-bold"}>
            {commentObject.userName}
          </span>
          <small>{commentObject.revenue} in revenue</small>
        </div>
      </div>
      <p>{commentObject.text}</p>
      <button className={"font-bold mt-auto btn-outline-comment"}>
        View {commentObject.userName + `'s`} profile
      </button>
    </div>
  );
};
