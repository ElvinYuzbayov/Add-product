import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
function Header() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">Logo</div>
      <div className="flex gap-8">
        <select className="text-black h-10 rounded-lg px-2">
          <option>Artan</option>
          <option>Azalan</option>
        </select>
        <div>
          <input
            className="h-10 px-1 rounded-lg outline-none text-black"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
}

export default Header;
