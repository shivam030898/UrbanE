"use client";
import Image from "next/image";
import React from "react";
import { IoFemale } from "react-icons/io5";
import { IoMdMale } from "react-icons/io";
import { useRouter } from "next/navigation";

const Card = () => {
  const router = useRouter();
  const handleMenClick = () => {
    router.push("/men");
  };
  const handleWomenClick = () => {
    router.push("/women");
  };
  return (
    <div className="py-5 mt-20">
      <div className="flex flex-1 justify-center items-center gap-9">
        <IoFemale size={70} color="white" />
        <h1 className="sm:text-8xl text-white font-bold text-4xl text-center uppercase">
          energy
        </h1>
        <IoMdMale size={70} color="white" />
      </div>
      <div className="mt-4 flex flex-1 items-center justify-center gap-8 ">
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="relative group  " onClick={handleWomenClick}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity "></div>
            <Image
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2F3d%2Fa83d0954c807fb2d61c94187974771127a6eb05c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
              alt=""
              width={760}
              height={480}
              objectFit="contain"
            />
            <button className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded">
              Women
            </button>
          </div>

          <div className="relative group" onClick={handleMenClick}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <Image
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa1%2F9b%2Fa19ba5d19a3b82fa79c13893bcc5927ecfcdfe94.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
              alt=""
              width={760}
              height={580}
              objectFit="contain"
            />
            <button className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded">
              Men
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
