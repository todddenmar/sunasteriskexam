import React from "react";

export default function TextAreaGroup({ label, value, onChange, type }) {
  return (
    <div className="grid gap-2">
      {label && <label>{label}</label>}
      <textarea
        type={type || "text"}
        className="p-2 rounded-md bg-gray-700 text-white mb-5"
        value={value}
        rows={5}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}
