import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunc } from "../../redux/modalSlice";
function Modal({ title, content, btnText, btnFunc }) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalFunc());
  };
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 h-screen w-[40%] mx-auto flex flex-col items-center justify-center">
      <div className="w-full bg-white shadow-lg rounded-md p-4 ">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <IoMdClose onClick={closeModal} size={24} />
        </div>
        {content}
      </div>
    </div>
  );
}

export default Modal;
