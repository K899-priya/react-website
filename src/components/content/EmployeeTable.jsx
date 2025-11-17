import React, { useState } from "react";
import { Pencil, Trash2, MoveUp, MoveDown, X } from "lucide-react";

function EmployeeTable() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ronny Asmo",
      role: "Software Engineer",
      salary: "3,200 NOK",
      checked: false,
      img: "/public/boy.png",
      status: "Test Period",
      time: "Full Time",
    },
    {
      id: 2,
      name: "Tomas Lonsetleig",
      role: "Business Analyst",
      salary: "4,000 NOK",
      checked: false,
      img: "/public/man.png",
      status: "Test Period",
      time: "Full Time",
    },
    {
      id: 3,
      name: "Kathrine Lonsetleig",
      role: "Project Manager",
      salary: "2,800 NOK",
      checked: false,
      img: "/public/woman.png",
      status: "Test Period",
      time: "Full Time",
    },
    {
      id: 4,
      name: "Arne Opheim",
      role: "Research Engineer",
      salary: "1,600 NOK",
      checked: false,
      img: "/public/man.png",
      status: "Test Period",
      time: "Part Time",
    },
    {
      id: 5,
      name: "Ingrid Oline",
      role: "Software Engineer",
      salary: "5,000 NOK",
      checked: false,
      img: "/public/girl.png",
      status: "Worker",
      time: "Full Time",
    },
    {
      id: 6,
      name: "Simon Ng",
      role: "Support Manager",
      salary: "3,200 NOK",
      checked: false,
      img: "/public/man.png",
      status: "Worker",
      time: "Full Time",
    },
    {
      id: 7,
      name: "Berg Moe",
      role: "Support Manager",
      salary: "3,200 NOK",
      checked: false,
      img: "/public/man.png",
      status: "Worker",
      time: "Part Time",
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    salary: "",
    time: "",
    status: "",
  });

  const handleCheckboxChange = (id) => {
    const updated = employees.map((emp) =>
      emp.id === id ? { ...emp, checked: !emp.checked } : emp
    );
    setEmployees(updated);
    const allSelected = updated.every((emp) => emp.checked);
    setSelectAll(allSelected);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const updated = employees.map((emp) => ({ ...emp, checked: newSelectAll }));
    setEmployees(updated);
  };

  const handleAddEmployee = () => {
    if (
      !newEmployee.name ||
      !newEmployee.role ||
      !newEmployee.salary ||
      !newEmployee.status
    ) {
      alert("Please fill all fields");
      return;
    }
    const newEmp = {
      id: employees.length + 1,
      name: newEmployee.name,
      role: newEmployee.role,
      salary: newEmployee.salary,
      time: newEmployee.time,
      status: newEmployee.status,
      checked: false,
      img: "/public/boy.png",
    };
    setEmployees([...employees, newEmp]);
    setShowModal(false);
    setNewEmployee({ name: "", role: "", salary: "", time: "", status: "" });
  };

  return (
    <div className="ml-6 mr-10 p-5">
      <h2 className="text-lg font-semibold mb-2">Employee</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-2xl"
        >
          + Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm ml-64">
        <div className="grid grid-cols-[40px_2fr_1fr_1fr_100px] font-bold text-gray-700 bg-gray-50 border-b text-sm px-6 py-3">
          <input
            type="checkbox"
            className="w-4 h-4 accent-purple-600"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <span className="flex items-center gap-1">
            Employee <MoveUp size={12} />
          </span>
          <span className="flex items-center gap-1">
            Salary <MoveUp size={12} />
          </span>
          <span className="flex items-center gap-1">
            Status <MoveDown size={12} />
          </span>
          <span>Manage</span>
        </div>

        {employees.map((emp) => (
          <div
            key={emp.id}
            className="grid grid-cols-[40px_2fr_1fr_1fr_100px] items-center px-6 py-2 border-b text-sm hover:bg-gray-600 transition-all"
          >
            <input
              type="checkbox"
              className="w-4 h-4 accent-purple-600"
              checked={emp.checked}
              onChange={() => handleCheckboxChange(emp.id)}
            />

            <div className="flex items-center gap-3">
              <img
                src={emp.img}
                alt={emp.name}
                className="w-9 h-9 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-900">{emp.name}</div>
                <div className="text-xs text-gray-400">{emp.role}</div>
              </div>
            </div>

            <div className="item-center">
              <div className="text-gray-800">{emp.salary}</div>
              <div className="text-xs text-gray-400">{emp.time}</div>
            </div>

            <div className="text-xs text-gray-400">{emp.status}</div>

            <div className="flex gap-6 text-gray-400">
              <Pencil
                size={16}
                strokeWidth={2}
                className="cursor-pointer hover:text-emerald-600"
              />
              <Trash2
                size={16}
                strokeWidth={2}
                className="cursor-pointer hover:text-red-600"
              />
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Add New Employee</h3>
              <button onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, name: e.target.value })
                }
                className="border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Role"
                value={newEmployee.role}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, role: e.target.value })
                }
                className="border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Salary"
                value={newEmployee.salary}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, salary: e.target.value })
                }
                className="border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Full, Part time"
                value={newEmployee.role}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, time: e.target.value })
                }
                className="border px-3 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Status"
                value={newEmployee.status}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, status: e.target.value })
                }
                className="border px-3 py-2 rounded-md"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmployee}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeTable;
