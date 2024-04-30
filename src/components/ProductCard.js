import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../redux/dataSlice";
import { updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  const updateFunc = () => {
    dispatch(modalFunc());
    // dispatch(updateDataFunc(item));
    navigate(`/?update=${item.id}`);
    setOpenEdit(false);
  };
  return (
    <div className="w-[300px] h-[300px] relative rounded-md">
      <img className="w-full h-full  rounded-md" src={item?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full">
        <div className="text-lg font-semibold">{item?.name}</div>
        <div>{item?.price}</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2 cursor-pointer"
      >
        <HiOutlineDotsHorizontal size={25} />
      </div>
      {openEdit && (
        <div className="bg-black border-white border-[1px] text-white flex flex-col justify-between px-2 absolute top-6  right-0">
          <button onClick={() => dispatch(deleteDataFunc(item.id))}>Sil</button>{" "}
          <button onClick={updateFunc}>Düzəliş et</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
