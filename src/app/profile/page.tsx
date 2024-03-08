"use client";
import { SiteLayout } from "@/components";
import React, { useEffect, useState } from "react";
import { emailRegex } from "@/utils";
import useUserStore from "@/zustand/user/store";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { userObj, setUserObj } = useUserStore();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
    //if user is not login return to login page
    if (!emailRegex.test(userObj.email)) {
      router.push("/login");
    }
  }, [userObj.email]);

  return (
    <SiteLayout>
      {loading ? (
        <></>
      ) : (
        <div className={"container mx-auto py-32 px-8 flex flex-col"}>
          <div className={"flex flex-row gap-3"}>
            <span className={"font-bold"}>User Name :</span>
            <span>{userObj.name}</span>
          </div>
          <div className={"flex flex-row gap-3"}>
            <span className={"font-bold"}>User Email :</span>
            <span>{userObj.email}</span>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
