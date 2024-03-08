import React from "react";
import { SiteLayout, CommentList } from "@/components";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/images/heroIllustration.png";
import startImage from "@/assets/images/star.svg";
import checkImage from "@/assets/images/Checkmark.svg";
import timeImage from "@/assets/images/time.svg";
import codeImage from "@/assets/images/code.svg";
import allSizesImage from "@/assets/images/allSizes.svg";
import secondHero from "@/assets/images/PageImage.png";

export default function Home() {
  return (
    <SiteLayout>
      <div className={"flex flex-col"}>
        <div className={"w-dvw bg-custom-light2"}>
          <div
            className={"container mx-auto flex flex-row h-dvh max-h-[1440px]"}
          >
            <div
              className={
                "w-full md:w-1/2 p-8 flex flex-col justify-center gap-8"
              }
            >
              <div className={"flex flex-row gap-2 flex-wrap"}>
                {[...Array(5)].map((_, index) => (
                  <Image src={startImage} key={index} alt={"star"} />
                ))}
                <span>Rated 4.8/5 (243 reviews)</span>
              </div>
              <h2 className={"text-3xl md:text-5xl lg:text-6xl font-bold"}>
                Create your portfolio in minutes.
              </h2>
              <span className={"font-medium text-custom-dark3"}>
                With Fiber, you can setup your own personal portfolio in minutes
                with dozens of premade, beautiful templates.
              </span>
              <div className={"flex flex-row gap-3 items-center"}>
                <button className={"btn-blue1"}>Start Free Trial</button>
                <Link
                  href={""}
                  className={
                    "text-custom-blue1 underline font-bold hover:font-extrabold"
                  }
                >
                  View Examples
                </Link>
              </div>
              <div className={"flex flex-row flex-wrap gap-2"}>
                <div className={"flex flex-row gap-1"}>
                  <Image src={checkImage} alt={"Check Image"} />
                  <span>No Credit Card Required</span>
                </div>
                <div className={"flex flex-row gap-1"}>
                  <Image src={checkImage} alt={"Check Image"} />
                  <span>10 Free Templates</span>
                </div>
              </div>
            </div>
            <div className={"hidden md:flex md:w-1/2 p-8"}>
              <Image
                src={heroImage}
                alt={"hero image"}
                className={"object-contain"}
              />
            </div>
          </div>
        </div>

        <div className={"flex flex-col container mx-auto px-8 py-12 gap-12"}>
          <div>
            <span className={"font-bold text-custom-blue1"}>Why Fiber?</span>
            <h3
              className={
                "font-bold text-2xl md:text-4xl w-full  lg:w-7/12 xl:w-6/12"
              }
            >
              A good portfolio means good employability.
            </h3>
          </div>
          <div className={"flex flex-row flex-wrap justify-center"}>
            <div className={"flex flex-col w-full md:w-1/2 lg:w-1/3 p-3 gap-2"}>
              <Image src={timeImage} alt={"timeImage"} />
              <span className={"font-bold"}>Build in minutes</span>
              <p className={"text-custom-dark2"}>
                With a selection of premade templates you can build out a
                portfolio in less than 10 minutes
              </p>
            </div>
            <div className={"flex flex-col w-full md:w-1/2 lg:w-1/3 p-3 gap-2"}>
              <Image src={codeImage} alt={"codeImage"} />
              <span className={"font-bold"}>Add custom CSS</span>
              <p className={"text-custom-dark2"}>
                Customize your personal portfolio even more with the ability to
                add your own custom CSS styles.
              </p>
            </div>
            <div className={"flex flex-col w-full md:w-1/2 lg:w-1/3 p-3 gap-2"}>
              <Image src={allSizesImage} alt={"allSizesImage"} />
              <span className={"font-bold"}>Responsive</span>
              <p className={"text-custom-dark2"}>
                All Fiber templates are fully responsive to ensure the
                experience is seemless across all devices
              </p>
            </div>
          </div>
          <div
            className={"flex flex-row bg-custom-blue1 rounded-lg pt-12 px-12 "}
          >
            <div
              className={
                "flex flex-col gap-3 w-full md:w-1/2 justify-center p-3 pb-12"
              }
            >
              <h4
                className={"font-bold text-2xl lg:text-4xl text-custom-white"}
              >
                Diversify your portfolio.
              </h4>
              <p className={"text-custom-white"}>
                Create an even more impressive portfolio by creating case
                studies for your projects. Simply follow our step-by-step guide.
              </p>
              <button
                className={
                  "font-bold bg-custom-white text-custom-blue1 py-3 px-4 rounded-md self-start"
                }
              >
                Start Free Trial
              </button>
            </div>
            <div className={"hidden md:flex flex-col justify-end w-1/2"}>
              <Image
                src={secondHero}
                alt={"second hero"}
                className={"object-contain"}
              />
            </div>
          </div>
        </div>
        <div className={"container mx-auto px-8 py-12 gap-12"}>
          <CommentList />
        </div>
      </div>
    </SiteLayout>
  );
}
