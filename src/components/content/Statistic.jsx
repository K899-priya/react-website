import React from "react";

export default function Statistic({
  title = "Statistics",
  value = 1,
  label = "Value",
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="w-full max-w-sm mx-auto p-4 border rounded-lg shadow-sm">
        <div className="bg-gray-100 p-4 rounded-md text-center">
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}
