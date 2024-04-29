import React from "react";

function Input({ value, type, id, name, onChange, placeholder }) {
  return (
    <input
      value={value}
      className="h-10 w-full border rounded p-2 outline-none mt-3"
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
