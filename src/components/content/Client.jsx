import React from "react";
import { EmployeeTable } from "./EmployeeTable.jsx"; 

export default function Client() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Client</h2>

      <div className="bg-white shadow rounded-lg">
        <div className="grid grid-cols-3 font-bold text-gray-700 bg-gray-100 border-b px-4 py-2">
          <span>Name</span>
          <span>Role</span>
          <span>Status</span>
        </div>

        {EmployeeTable.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-3 px-4 py-2 border-b text-sm text-gray-800"
          >
            <span>{emp.name}</span>
            <span>{emp.role}</span>
            <span>{emp.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
