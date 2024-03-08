import React from "react";
import { SiteLayout } from "@/components/site-layout";
import Link from "next/link";
import "./style.scss";

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <div
        className={
          "flex flex-col h-full w-full justify-center items-center py-32"
        }
      >
        <div className="center">
          <div className="error">
            <div className="number">4</div>
            <div className="illustration">
              <div className="circle"></div>
              <div className="clip">
                <div className="paper">
                  <div className="face">
                    <div className="eyes">
                      <div className="eye eye-left"></div>
                      <div className="eye eye-right"></div>
                    </div>
                    <div className="rosyCheeks rosyCheeks-left"></div>
                    <div className="rosyCheeks rosyCheeks-right"></div>
                    <div className="mouth"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="number">4</div>
          </div>

          <div className="text mb-3">
            Oops. The page you{`'`}re looking for doesn{`'`}t exist.
          </div>
          <Link className="cursor-pointer  btn-blue1" href={"/"}>
            Back Home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
