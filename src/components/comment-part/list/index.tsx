"use client";
import React, { useState } from "react";
import { SingleComment } from "../single";
import user1Image from "@/assets/images/UserAvatar.svg";
import user2Image from "@/assets/images/UserAvatar2.svg";
import user3Image from "@/assets/images/UserAvatar32.svg";
import { CommentType } from "@/DTO";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "./style.scss";
import useUserStore from "@/zustand/user/store";
import Link from "next/link";

export const CommentList: React.FC = () => {
  const { userObj } = useUserStore();
  const [commentList, setCommentList] = useState<CommentType[]>([
    {
      userImage: user1Image,
      userName: "Sarah Andrews",
      revenue: "$100k",
      text: `Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100K.`,
    },
    {
      userImage: user2Image,
      userName: "mathew Higgins",
      revenue: "$20k",
      text: `I have been getting A LOT of leads ever since I used Fiber's pre made templates, now I just need to work on my case studies and I'be ready to go!`,
    },
    {
      userImage: user3Image,
      userName: "Janice Dave",
      revenue: "$30k",
      text: `I only just started freelancing this year have already made more than I ever in my full-time job. The templates are so amazing`,
    },
  ]);

  const [newComment, setNewComment] = useState<string>("");
  const [showErr, setShowErr] = useState<boolean>(false);

  return (
    <div className="flex flex-col container h-full gap-16">
      <div>
        {/*this for showing responsive horizontal scroll*/}
        <Swiper
          slidesPerView={1.2}
          breakpoints={{
            520: {
              slidesPerView: 1.25,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 2.8,
              spaceBetween: 10,
            },
          }}
          spaceBetween={5}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ paddingBottom: "22px" }}
        >
          {commentList.map((item, index) => (
            <SwiperSlide key={index} className={"p-2"}>
              <SingleComment commentObject={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowErr(false);
          if (userObj && userObj.email.length > 0 && newComment.length >= 3) {
            setCommentList([
              {
                userImage: user1Image,
                userName: userObj.name,
                revenue: "$450k",
                text: newComment,
              },
              ...commentList,
            ]);
          } else {
            setShowErr(true);
          }
        }}
        className={"w-full flex flex-col gap-2"}
      >
        <h4 className={"font-bold text-2xl "}>Leave a Comment</h4>
        <textarea
          className={"custom-input border w-full min-h-40"}
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        {showErr ? (
          !(userObj && userObj.email.length > 0) ? (
            <small className={"text-custom-red1"}>
              Please{" "}
              <Link href={"/login"} className={"underline"}>
                Login in
              </Link>{" "}
              first.
            </small>
          ) : (
            <small className={"text-custom-red1"}>
              You must enter at least 3 characters.
            </small>
          )
        ) : (
          <></>
        )}
        <button type={"submit"} className={"btn-blue1 self-end"}>
          submit
        </button>
      </form>
    </div>
  );
};
