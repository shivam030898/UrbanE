"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const tshirtProduct = [
  {
    id: "1",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F45%2Fed%2F45ed500d94d6a629a5e22fc92af6b72e7aff6088.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=source[/2f/9f/2f9febb6a47d54c555878d2bc5415aaa5df36013.jpg],origin[dam],category[MEN_TSHIRTSTANKS_POLO],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    name: "Slim Polo Shirt",
  },
  {
    id: "2",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8c%2F39%2F8c3995b45be1b4b0924f160d73c04a62cf6f0faf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=source[/2c/ab/2cab82b1ccdcf394e51180c1ef81deac26e15b3a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
    name: "Slim Polo Shirt",
  },
  {
    id: "3",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb3%2F28%2Fb328bd986335bea66d144e07c60f8615e280aca7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb0%2F79%2Fb07923511ae19ea66f0ea4ef89b0296bacf9cf29.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Slim Polo Shirt",
  },
  {
    id: "4",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fba%2Fb8%2Fbab80fc4616410db080f4231c1d6d152a14bc080.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fda%2Fdc%2Fdadc01ff1958f7fb7dbd76334f6f5bf46d5cb5de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Slim Polo Shirt",
  },
  {
    id: "5",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2Fbe%2Fdabe8164359a38fbbfc9abb765f61e046a6196ea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6b%2Ff9%2F6bf914d5a8e160aacf0047765de2f20941368eeb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Slim Polo Shirt",
  },
  {
    id: "6",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffa%2Fa7%2Ffaa71f7684c70f90d887416feba8c448f9120260.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F38%2F06%2F380609a19cfd897b634bfea723a83df777092531.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Slim Polo Shirt",
  },
  {
    id: "7",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9a%2Fbd%2F9abd896f22c32a21bb15e0912d825c8dc3cf682c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd3%2F50%2Fd35034b668dc01075d9dc60e96f306807afbd67b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Skinny Trousers",
  },
  {
    id: "8",
    img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2d%2F28%2F2d2865eb438064d6f27b4878b1250eb7849692fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F63%2Fbe%2F63befacfa2d8ed37ee8fc219c96b38d479b77e48.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_regular_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Skinny Trousers",
  },
  {
    id: "9",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2Fe6%2Fd4e632fc6e8fdec181c4f512cd1b98bf9623ba61.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F38%2Fd9%2F38d98a3a72cd08ff024dac690ceada43987b7068.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Skinny Trousers",
  },
  {
    id: "10",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fef%2F19%2Fef1935caa04b64f22584df93b5751604bc23802a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F89%2F6f%2F896f2abf184924d97c90eb6f1583f6228439f15d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Skinny Trousers",
  },
  {
    id: "11",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3a%2Fa9%2F3aa9fb465e87e0e90a25613d035b1fbfe202aa9f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd9%2F39%2Fd9399aadf3bb2f735417a7a771e4b4669b3de490.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Skinny Trousers",
  },
  {
    id: "12",
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2Fe9%2F49e94e1ddbbe9ac659c9395c7677743ca87454fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    hoverImg:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Faa%2Fdd%2Faadd3f9a6cbe1e5be29c57a607793d292596393a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    name: "Skinny Trousers",
  },
];

const Page = () => {
  const router = useRouter();

  const pathname = usePathname();
  const handleSingleProductPage = (id: string, img: string, name: string) => {
    router.push(`/products}`);
  };
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full flex justify-center pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {tshirtProduct.map((item) => (
            <div
              onClick={() =>
                handleSingleProductPage(item.id, item.img, item.name)
              }
              key={item.id}
              className="text-center relative group"
            >
              <Link
                href={{
                  pathname: `/products/${item.id}`,
                  query: {
                    id: item.id,
                    img: item.img,
                    name: item.name,
                  },
                }}
                as={`/products/${item.id}`}
              >
                <Image
                  src={item.img}
                  width={400}
                  height={400}
                  alt={item.name}
                  className="group-hover:hidden"
                />
              </Link>

              <Image
                src={item.hoverImg}
                width={400}
                height={400}
                alt={`${item.name} hover`}
                className="hidden group-hover:block absolute top-0 left-0"
              />

              <p className="text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
