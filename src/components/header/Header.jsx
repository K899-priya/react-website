import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Bell } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 grid grid-cols-[240px_1fr_240px] items-center bg-gray-700 border-b border-gray-200 px-6 py-3">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="h-15 w-15 " />
        <span className="text-lg font-bold text-gray-800">Internia</span>
      </div>

      <nav className="flex justify-center">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/Calander"
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Calendar
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Statistic"
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Statistic
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/EmployeeTable"
              className="text-sm font-semibold text-gray-900 "
            >
              Employee
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Client"
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Client
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Equipment"
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Equipment
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex justify-end items-center gap-3">
        <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100">
          <Mail size={18} />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100">
          <Bell size={18} />
        </button>
        <img
          src="/user.png"
          alt="user"
          className="w-9 h-9 object-cover bg-black rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
