"use client";
import Link from "next/link";
import { CustomInput } from "@/components";
import React, { useEffect, useState } from "react";
import { emailRegex, passwordRegex } from "@/utils";
import useUserStore from "@/zustand/user/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from "@/assets/images/PageImage.png";
import image2 from "@/assets/images/SignUpImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./style.scss";

export default function LoginPage() {
  const { userObj, setUserObj } = useUserStore();
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [acceptConditions, setAcceptConditions] = useState<boolean>(false);

  // store user object in zustand and localstorage
  const signUpHandler = () => {
    if (
      name.length >= 2 &&
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      acceptConditions
    ) {
      setUserObj({ name: name, email: email });
    }
  };

  useEffect(() => {
    //if user is login return to main page
    if (emailRegex.test(userObj.email)) {
      router.push("/");
    }
  }, [userObj.email]);

  return (
    <main className={"flex flex-row relative "}>
      {/*This div is for displaying correctly in a size larger than 1536 pixels*/}
      <div className={"flex flex-row h-full w-full absolute -z-10 top-0"}>
        <div className={"min-h-dvh hidden md:flex w-1/2 bg-custom-white"}></div>
        <div
          className={"min-h-dvh flex w-full md:w-1/2  bg-radial-gradient"}
        ></div>
      </div>
      <div className={"flex flex-row justify-center w-full container mx-auto"}>
        <div
          className={
            "min-h-dvh flex flex-col w-full md:w-1/2 justify-center py-8 px-8 lg:px-16"
          }
        >
          <div className={"flex flex-col gap-8 bg-custom-white p-8 rounded-md"}>
            <h1 className={"font-bold text-2xl"}>Fiber</h1>
            <h2 className={"text-4xl font-bold"}>Create your Fiber account</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signUpHandler();
              }}
              className={"flex flex-col gap-7"}
            >
              <label className={"flex flex-col gap-2"}>
                <span className={"font-bold"}>Your Name</span>
                <CustomInput
                  className={"custom-input"}
                  placeholder={"John Doe"}
                  name={"name"}
                  type={"text_number"}
                  onChange={setName}
                  value={name}
                  validation={name.length >= 2}
                  textError={"Please enter at least 2 character"}
                />
              </label>
              <label className={"flex flex-col gap-2"}>
                <span className={"font-bold"}>E-Mail</span>
                <CustomInput
                  className={"custom-input"}
                  placeholder={"john@example.com"}
                  name={"email"}
                  type={"text_number"}
                  onChange={setEmail}
                  value={email}
                  validation={emailRegex.test(email)}
                  textError={"Please use valid email"}
                />
              </label>
              <label className={"flex flex-col gap-2"}>
                <span className={"font-bold"}>Password</span>
                <CustomInput
                  className={"custom-input"}
                  placeholder={"At least 8 characters"}
                  name={"password"}
                  type={"password"}
                  onChange={setPassword}
                  value={password}
                  validation={passwordRegex.test(password)}
                  textError={"Please use at least 8 English characters"}
                />
              </label>
              <label className={"flex flex-row items-center gap-2"}>
                <input
                  type={"checkbox"}
                  className={"outline-none"}
                  checked={acceptConditions}
                  onChange={() => {
                    setAcceptConditions(!acceptConditions);
                  }}
                />
                <span className={"self-start cursor-pointer"}>
                  By creating an account on Fiber, you agree to the{" "}
                  <Link href={""} className={"text-custom-blue1 underline"}>
                    Term & Conditions
                  </Link>
                </span>
              </label>
              <button
                className={"bg-custom-blue1 p-2 text-custom-white rounded-md"}
                disabled={
                  !(
                    name.length >= 2 &&
                    emailRegex.test(email) &&
                    passwordRegex.test(password) &&
                    acceptConditions
                  )
                }
              >
                Create Fiber Account
              </button>
            </form>
            <span className={"text-center"}>
              Already have an account?{" "}
              <span className={"text-custom-blue1 cursor-pointer"}>
                Sign in
              </span>
            </span>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="!hidden md:!block  w-1/2 lg:px-16"
        >
          <SwiperSlide>
            <div
              className={
                "flex flex-col justify-center p-12 gap-8 text-center h-full"
              }
            >
              <Image
                alt={"image"}
                src={image}
                className=" object-contain "
                width={700}
                height={700}
              />
              <div className={"flex flex-col gap-3"}>
                <span className={"text-custom-white font-bold  text-4xl "}>
                  Unparalleled Templates
                </span>
                <span className={"text-custom-white text-xl"}>
                  Crafted by a team of professional designers, our templates are
                  eunparalleled in the market.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={
                "flex flex-col justify-center p-12 gap-8 text-center h-full"
              }
            >
              <Image
                alt={"image2"}
                src={image2}
                className=" object-contain "
                width={700}
                height={700}
              />
              <div className={"flex flex-col gap-3"}>
                <span className={"text-custom-white font-bold  text-4xl "}>
                  Unparalleled Templates
                </span>
                <span className={"text-custom-white text-xl"}>
                  Crafted by a team of professional designers, our templates are
                  eunparalleled in the market.
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
