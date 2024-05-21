"use client";
import Image from "next/image";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiWarningCircle } from "react-icons/pi";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CiShoppingCart } from "react-icons/ci";

const mainProduct = [
  {
    name: "First Image",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F68%2F3b%2F683b4bfe0975246d4483476eeb7d5641dc94b953.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    name: "Second Image",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe2%2Fa6%2Fe2a6f0968b8cd911f11a345e2dd236768bc260f7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    name: "Third Image",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc9%2F37%2Fc93729e4a03ac4329b960af938ea2c5774e6f864.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    name: "Fourth Image",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2b%2F56%2F2b56922c654c642a6da7c16f4254e671801a4c0c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
];
const mainProduct2 = [
  {
    name: "First Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_bags/Women_LG_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Second Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_slg/Women_SLG_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
];

const Page = () => {
  return (
    <div className="text-white flex flex-1 p-10 justify-center items-center gap-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 mt-4 w-1/2">
        {mainProduct.map((item, key) => (
          <Image
            key={key}
            src={item.img}
            width={700}
            height={300}
            alt={item.name}
          />
        ))}
      </div>
      <div className="flex flex-col ml-5 justify-start gap-2 mb-40 ">
        <h1 className="text-xl font-bold text-white">
          Regular Fit Short Sleeved reshort tshirt
        </h1>
        <span className="text-gray-500">MRP inclusive of all taxes</span>
        <span className="text-white font-bold text-xl">Rs 20,000.00</span>
        <h3 className="text-white font-normal">Light Beige</h3>
        <div className="flex flex-1 justify-start gap-2 cursor-pointer">
          {mainProduct2.map((item, key) => (
            <Image
              key={key}
              src={item.img}
              width={50}
              height={0}
              alt={item.name}
            />
          ))}
        </div>
        <div className="cursor-pointer gap-3 flex flex-1 justify-center items-center px-10 py-3 bg-transparent border-2 text-white border-white hover:bg-white transition-all ease-in-out hover:text-black mt-4">
          <button className="font-bold">Add to Cart</button>
          <CiShoppingCart size={30} />
        </div>
        <div className="flex flex-1 items-center gap-2">
          <SiHomeassistantcommunitystore size={15} color="white" />
          <span className="text-white">Avaliable in the Store</span>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <PiWarningCircle size={15} color="white" />
          <span className="text-white">Delivery withing 2 days</span>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Description & Fit</AccordionTrigger>
            <AccordionContent>
              Short-sleeved shirt in soft cotton twill with a resort collar,
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Material</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Care</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Page;
