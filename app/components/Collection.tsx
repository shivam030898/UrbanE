"use client";
import Image from "next/image";
import React from "react";

const data = [
  {
    name: "First Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_bags/Women_LG_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Second Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_slg/Women_SLG_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Third Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_fashionjewelry/Women_FashionJewelry_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Fourth Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_shoes/Women_Shoes_Sandal_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Fifth Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_shoes/Men_Shoes_Sneakers_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Sixth Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/perfumes/Perfumes_WW_HP_Category_Push_20240225_DII.jpg?wid=730",
  },
  {
    name: "Seventh Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_sunglasses/Men_SG_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Seventh Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_bags/Men_LG_WW_HP_Category_Push_20240425_DII.jpg?wid=730",
  },
  {
    name: "Sixth Image",
    img: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/perfumes/Perfumes_WW_HP_Category_Push_20240225_DII.jpg?wid=730",
  },
];

const Collection = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium text-white text-center mt-6 pt-6">
        Explore a Selection of the Maison Creations
      </h1>
      <div className="flex justify-center pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-4">
          {data.map((item, key) => (
            <Image
              key={key}
              src={item.img}
              width={500}
              height={500}
              alt={item.name}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-medium text-white text-center mt-6 pt-6 ">
          Sneakers
        </h1>
        <h1 className="text-lg font-medium text-white text-center underline">
          Explore this Exclusive collection
        </h1>
      </div>
      <Image
        className="mt-5"
        src="https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/category/shoes/M_BC_MSHOES_LV_Trainer_Evergreen_Apr24_03_DI3.jpg?wid=4096"
        width={3000}
        height={1500}
        alt="new"
      />
    </div>
  );
};

export default Collection;
