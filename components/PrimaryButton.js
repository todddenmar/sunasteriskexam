import { SignalIcon } from "@heroicons/react/24/solid";
import React from "react";

function PrimaryButton({ text, onClick, isLoading }) {
  return isLoading ? (
    <SignalIcon className="h-5 w-5 text-red-500 animate-spin" />
  ) : (
    <button
      className="bg-red-500 text-white p-4 rounded-lg min-w-[200px]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
