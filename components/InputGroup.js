import React from "react";

export default function InputGroup({
  label,
  value,
  onChange,
  placeholder,
  type,
}) {
  return (
    <div className="grid gap-2">
      {label && <label>{label}</label>}
      <input
        type={type || "text"}
        className="p-2 rounded-md bg-gray-700 text-white mb-5"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
