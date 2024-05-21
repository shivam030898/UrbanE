"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const data = [
  {
    name: "First Image",
    img: "https://static.zara.net/assets/public/3b47/ef65/0e59460d96ae/0a2d9165762d/image-landscape-fill-035a9510-5ab5-4cc8-898e-898976d78977-default_0.jpg?ts=1715676115467&w=1920",
  },
  {
    name: "Second Image",
    img: "https://static.zara.net/assets/public/6e2c/d4be/70024b43939d/6b58a75278c3/image-landscape-fill-aa9c8eea-08e7-4aeb-8886-18913c0cb3d8-default_0.jpg?ts=1715799577998&w=2560",
  },
  {
    name: "Third Image",
    img: "https://static.zara.net/assets/public/bd8b/cea8/8d2044f88e4f/3647170eca96/image-landscape-default-fill-0549555a-30e0-4ae3-bce9-f6776ffb5077-default_0.jpg?ts=1715614461752&w=2560",
  },
  {
    name: "Fourth Image",
    img: "https://static.zara.net/assets/public/64ba/406a/acc6405eae70/6360d522b4d0/image-landscape-fill-3da995ef-ed27-4040-96fe-6f904c886c62-default_0.jpg?ts=1715615244494&w=2560",
  },
  {
    name: "Fifth Image",
    img: "https://static.zara.net/assets/public/6d52/dddb/ff704c5f9ba4/a057e442cc8a/image-landscape-fill-6ac00355-2e1a-45d3-afd1-97c8b83f8010-default_0.jpg?ts=1715614683007&w=2560",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative group">
      <div
        style={{ backgroundImage: `url(${data[currentIndex].img})` }}
        className="h-[980px] w-full bg-center bg-cover duration-500 bg-no-repeat relative"
      >
        {/* Button */}
        <div className="absolute flex flex-1 justify-center gap-3 z-10 bottom-10 left-1/2 transform -translate-x-1/2 ">
          <Button className="  bg-transparent text-white border-2 border-white mt-11 hover:text-black hover:bg-white transition-all ease-in-out shadow-md">
            View
          </Button>
          <Button className="  bg-transparent text-white border-2 border-white mt-11 hover:text-black hover:bg-white transition-all ease-in-out">
            Summer 2k24
          </Button>
        </div>
        {/* left arrow */}
        <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/15 text-white cursor-pointer ml-5">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/15 text-white cursor-pointer mr-5">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
