import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function ProductCard({ item }) {
  return (
    <div className="w-[200px] h-[200px] relative rounded-md">
      <img className="w-full h-full  rounded-md" src={item?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold">{item?.name}</div>
        <div>{item?.price}</div>
      </div>
      <div className="absolute top-0 right-0">
        <HiOutlineDotsHorizontal size={25} />
      </div>
    </div>
  );
}

export default ProductCard;
