import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className={"bg-custom-light2 p-12 mt-auto"}>
      <div className={"flex flex-row flex-wrap container mx-auto"}>
        <div className={"flex flex-col w-full md:w-1/3 p-2 gap-2"}>
          <span className={"font-bold"}>Fiber</span>
          <span>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </span>
          <span className={"mt-auto"}>Made with 🖤 in the Netherlands.</span>
        </div>
        <div className={"flex flex-col w-1/2 sm:w-1/4 md:w-1/6 p-2 gap-2"}>
          <span className={"font-bold"}>Sitemap</span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Homepage
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Pricing
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Testimonials
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Features
          </span>
        </div>
        <div className={"flex flex-col w-1/2 sm:w-1/4 md:w-1/6 p-2 gap-2"}>
          <span className={"font-bold"}>Resources</span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Support
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Contact
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            FAQ
          </span>
        </div>
        <div className={"flex flex-col w-1/2 sm:w-1/4 md:w-1/6 p-2 gap-2"}>
          <span className={"font-bold"}>Company</span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            About
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Customers
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            BIog
          </span>
        </div>
        <div className={"flex flex-col w-1/2 sm:w-1/4 md:w-1/6 p-2 gap-2"}>
          <span className={"font-bold"}>Portfolios</span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Sarah Andrews
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Mathew Higgins
          </span>
          <span className={"hover:font-bold self-start cursor-pointer"}>
            Janice Dave
          </span>
        </div>
      </div>
    </footer>
  );
};
