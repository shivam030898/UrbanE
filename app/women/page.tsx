"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const product = [
  {
    id: "1",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F68%2F3b%2F683b4bfe0975246d4483476eeb7d5641dc94b953.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa8%2F4a%2Fa84a7d9eefce20cee69fbc6310745979ee958963.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "A-line dress",
  },
  {
    id: "2",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2Fd2%2F40d2c635a0e983a5becbc365d7b629e3ae63d328.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fbd%2F82%2Fbd82f3277fccfa0c0313ba8666122deb6efe21d1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Sweetheart-neck thong body",
  },
  {
    id: "3",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd9%2F19%2Fd919757cde9fa8e3658d44c802fe576497ac5b13.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=source[/f5/b8/f5b817ab182fafe0af422937260d5f1256b822f0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[3]&call=url[file:/product/main]",
    name: "Net Dress",
  },
  {
    id: "4",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1c%2F63%2F1c63f78886ef6677438a69283c41e2903ab6de48.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcc%2F66%2Fcc66173c58b76b717ec74b2d2c48c8e8b357af64.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Poplin bralette top",
  },
  {
    id: "5",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F36%2Fc1%2F36c1709aa613de70a3d84fe08249c244bfc9d77f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb1%2F6d%2Fb16d5334edae9872c44447d222824f2f12d6424f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Tie tanga bikini bottoms",
  },
  {
    id: "6",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3c%2F59%2F3c590b79303c31811a9334f9291007d634086e2c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Faf%2Ff2%2Faff22e2b89dbd016d17593102b2e912c95d0e37f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Tie tanga bikini bottoms",
  },
  {
    id: "7",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fab%2F6e%2Fab6e119af25c3efd0c10d9f5662729479cf11b23.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd5%2F27%2Fd5278126a79fb3f05149302d0ab4e1d2e170cf8d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Drawstring-detail dress",
  },
  {
    id: "8",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F88%2F8f88daf05a2cad87fb9f416c8a339592451e6674.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1d%2F6c%2F1d6c609a5c8becdbfa644f0e7affa67450450136.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_printed_tshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Oversized printed T-shirt",
  },
  {
    id: "9",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F07%2F1d%2F071d204078ec87fa16573a1dc789a4e8f3663206.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Faa%2F9f%2Faa9f1d1833233069fec687db9d0137d17725a4fc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Baggy Low Jeans",
  },
  {
    id: "10",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2Ff5%2Fb6f56f589dc2e706c3915ae3436619eb61479357.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7f%2Fa7%2F7fa7f0382cfbaf2894b8d7b2a91c2ef974935ed7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Slit-cuff blazer",
  },
  {
    id: "11",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F43%2Fd0%2F43d04beed97f87051f731faaf8d295ef7116eaf1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd1%2F0f%2Fd10f1e515943417307c80db4a5986688d27bfde6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Fitted jacket",
  },
  {
    id: "12",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fca%2F78%2Fca780a3f00feacef115095cb635111a447676c45.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0d%2F96%2F0d96caac7d0ea77eff66e5cc10a884a80d1c84bb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D",
    name: "Double-breasted blazer",
  },
];

const Page = () => {
  const router = useRouter();

  const pathname = usePathname();
  const handleSingleProductPage = () => {
    router.push(`/products`);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-4xl font-bold text-white mt-4 pt-5 uppercase ">
        Women Collection
      </h1>
      <span className="text-gray-500 font-normal text-md">
        All our collection
      </span>
      <div className="w-full flex justify-center pt-3 p-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {product.map((item) => (
            <div
              onClick={() => handleSingleProductPage}
              key={item.id}
              className="text-center relative group"
            >
              <Image
                src={item.img}
                width={400}
                height={400}
                alt={item.name}
                className="group-hover:hidden"
              />

              <Image
                src={item.hoverImg}
                width={400}
                height={400}
                alt={`${item.name} hover`}
                className="hidden group-hover:block absolute top-0 left-0 sm:group-hover:block"
              />

              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <p className="text-white">{item.name}</p>
                <p className="text-white">Rs 20000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
