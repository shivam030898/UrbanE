"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "MEN",
    link: "#",
    children: [
      { label: "T-shirts", link: "/tshirts" },
      { label: "Trousers", link: "#" },
      { label: "Shirts", link: "#" },
    ],
  },
  {
    label: "WOMEN",
    link: "#",
    children: [
      { label: "Dress", link: "#" },
      { label: "T-shirts", link: "#" },
      { label: "Jeans", link: "#" },
    ],
  },
  {
    label: "Career",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
];

export default function Navbar() {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };
  const handleCartClick = () => {
    router.push("/cart");
  };
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  function openSideMenu() {
    setSideMenuOpen(true);
  }

  function closeSideMenu() {
    setSideMenuOpen(false);
  }

  return (
    <div className="bg-customGray z-50 mx-auto flex w-full justify-between items-center px-4 py-4 text-sm text-white">
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((item, i) => (
            <div key={i} className="relative group px-2 py-3 transition-all">
              <Link href={item.link ?? "#"}>
                <p className="flex cursor-pointer items-center gap-2">
                  <span>{item.label}</span>
                  {item.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </p>
              </Link>
              {item.children && (
                <div className="z-50 bg-customGray absolute left-0 top-10 hidden w-auto flex-col gap-1 rounded-lg py-3 shadow-md transition-all group-hover:flex text-white">
                  {item.children.map((data, i) => (
                    <Link
                      key={i}
                      href={data.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8"
                    >
                      <p className="whitespace-nowrap pl-2">{data.label}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <p
        onClick={handleHomeClick}
        className="font-bold text-3xl cursor-pointer ml-2 absolute left-1/2 transform -translate-x-1/2"
      >
        UrbanE
      </p>
      <div className="flex items-center gap-8">
        <section className="hidden md:flex items-center gap-3">
          <form action="" className="flex flex-1 items-center">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full px-3 py-2 pl-10 rounded-xl border-1 border-white bg-darkerGray"
                placeholder="Search"
              />
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
            </div>
          </form>
          <Button variant="outline" className="text-black">
            Login
          </Button>
          <Button variant="outline" className="text-black">
            Register
          </Button>
          <CiShoppingCart
            onClick={handleCartClick}
            size={30}
            color="white"
            className="cursor-pointer"
          />
        </section>
        <TfiMenu
          onClick={openSideMenu}
          className="cursor-pointer text-4xl md:hidden"
        />
      </div>
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div className="z-50 fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-darkerGray px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div
          ref={animationParent}
          className="flex flex-col gap-4 transition-all"
        >
          {navItems.map((item, i) => (
            <SingleNavItem
              key={`mobile-nav-item-${i}`}
              label={item.label}
              link={item.link}
            >
              {item.children}
            </SingleNavItem>
          ))}
          <form action="" className="flex flex-1 items-center">
            <div className="relative w-full">
              <input
                type="text"
                className="w-1/2 px-3 py-2 pl-10 rounded-xl border-1 border-white bg-customGray"
                placeholder="Search"
              />
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
            </div>
          </form>
          <br />
          <button className="h-fit transition-all">Login</button>
          <Button variant="outline" className="text-black">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ label, link, children }: NavItem) {
  const [isItemOpen, setItemOpen] = useState(false);
  const [animationParent] = useAutoAnimate();

  function toggleItem() {
    setItemOpen(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <Link href={link ?? "#"} onClick={toggleItem}>
        <p className="flex cursor-pointer items-center gap-2 text-neutral-400">
          <span>{label}</span>
          {children && (
            <IoIosArrowDown
              className={`transition-all text-xs ${isItemOpen && "rotate-180"}`}
            />
          )}
        </p>
      </Link>
      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-customGray py-3 transition-all flex">
          {children.map((data, i) => (
            <Link
              key={`child-nav-item-${i}`}
              href={data.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400"
            >
              <p className="whitespace-nowrap pl-2">{data.label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
