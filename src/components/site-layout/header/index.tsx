"use client";
import React from "react";
import Image from "next/image";
import hamburgerMenuImage from "@/assets/images/HamburgerMenu.svg";
import Link from "next/link";
import useUserStore from "@/zustand/user/store";
import "./style.scss";

export const Header: React.FC = () => {
  const { userObj, setUserObj } = useUserStore();

  return (
    <header
      className={
        "flex flex-row justify-between fixed z-10 top-0 w-dvw bg-custom-light2 p-4"
      }
    >
      <div
        className={
          "flex flex-row justify-between items-center gap-3 container mx-auto"
        }
      >
        <span className={"text-2xl md:w-1/3"}>Fiber</span>
        <div
          className={
            "hidden md:flex flex-row gap-3 text-lg font-light w-1/3 justify-center"
          }
        >
          <span className={"cursor-pointer hover:font-medium"}>Community</span>
          <span className={"cursor-pointer hover:font-medium"}>Pricing</span>
          <span className={"cursor-pointer hover:font-medium"}>Features</span>
        </div>
        <div className={"hidden md:flex flex-row gap-2 w-1/3 justify-end"}>
          {userObj.email.length > 0 ? (
            <div id={"UserName"}>
              <span className={"font-bold cursor-pointer"}>{userObj.name}</span>
              <div className={"relative"}>
                <div
                  className={
                    "absolute right-0 flex flex-row justify-center min-w-full text-nowrap pt-2"
                  }
                  onClick={() => {
                    setUserObj({ name: "", email: "" });
                  }}
                >
                  <button
                    className={"bg-custom-light2 rounded-md px-4 py-1 shadow"}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className={"flex flex-row gap-2"}>
              <Link
                href={"/login"}
                className={"font-bold  py-3 px-4 hover:underline"}
              >
                Sign In
              </Link>
              <Link href={"/login"} className={"btn-blue1 hover:opacity-85"}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
        <label htmlFor={"drawer-checkbox"} className={"flex md:hidden"}>
          <Image alt={"Hamburger Menu Image"} src={hamburgerMenuImage} />
        </label>
      </div>
      <input type="checkbox" id="drawer-checkbox" className="hidden" />
      <div className="drawer-side-part">
        <div className={"flex flex-col gap-2 h-full"}>
          <label htmlFor="drawer-checkbox" className="cursor-pointer self-end">
            <span>×</span>
          </label>
          {userObj && userObj.email.length > 0 ? (
            <div className={"flex flex-col gap-0"}>
              <span className={"font-bold cursor-pointer"}>{userObj.name}</span>
              <span className={"font-bold cursor-pointer"}>
                {userObj.email}
              </span>
            </div>
          ) : (
            <></>
          )}

          <span
            className={
              "cursor-pointer hover:font-medium p-2 rounded-md border text-custom-dark2"
            }
          >
            Community
          </span>
          <span
            className={
              "cursor-pointer hover:font-medium p-2 rounded-md border text-custom-dark2"
            }
          >
            Pricing
          </span>
          <span
            className={
              "cursor-pointer hover:font-medium p-2 rounded-md border text-custom-dark2"
            }
          >
            Features
          </span>

          {userObj && userObj.email.length > 0 ? (
            <button
              onClick={() => {
                setUserObj({ name: "", email: "" });
              }}
              className={"btn-blue1 px-4 py-1 mt-auto"}
            >
              Log out
            </button>
          ) : (
            <div className={"flex flex-row  gap-2 mt-auto"}>
              <Link
                href={"/login"}
                className={
                  "font-bold  py-3 px-4 hover:underline w-1/2 text-center"
                }
              >
                Sign In
              </Link>
              <Link
                href={"/login"}
                className={"btn-blue1 hover:opacity-85 w-1/2 text-center"}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
      <label
        htmlFor={"drawer-checkbox"}
        className={"drawer-background-part"}
      ></label>
    </header>
  );
};
