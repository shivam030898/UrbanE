import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Vip = () => {
  return (
    <div className="flex flex-1 justify-center items-center gap-10 pt-20">
      <div className="hidden sm:block sm:w-full md:w-1/4 lg:w-1/3 xl:w-auto">
        <Image
          src="https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=1090"
          width={700}
          height={500}
          alt="new"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-medium text-white uppercase text-2xl sm:text-4xl">
          CRUISE 2025 FASHION SHOW
        </h1>
        <button className="px-2 py-2 w-3/4 sm:px-3 sm:py-3 sm:w-1/4 bg-transparent text-white border-2 border-white rounded-xl mt-5 hover:bg-white hover:text-black transition-all ease-linear">
          Visit
        </button>
      </div>
    </div>
  );
};

export default Vip;
