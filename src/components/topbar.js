import Items from "@/components/items";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import React from "react";

export default function Topbar() {
  return (
    <div className="flex w-full items-center justify-center p-[20px] rounded bg-[#4E1B53]">
      {/* <a href={"/"}>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert justify-start w-inherit"
          src="/logo_transparent.png"
          alt="Cart Logo"
          width={82.5}
          height={27.75}
          priority
        />
      </a> */}
      <a href="/">
        <div className="flex text-[40px] text-white opacity-[0.6] w-full justify-center items-center">
          Marketplace
        </div>
      </a>
      
       
    </div>
  );
}