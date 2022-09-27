import React from "react";

function IconButton({ Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white rounded-full p-5 hover:bg-red-400"
    >
      {Icon}
    </button>
  );
}

export default IconButton;
