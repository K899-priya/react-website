import {
  Spotlight,
  Building2,
  Fish,
  Flame,
  Banknote,
  Clock,
  Timer,
  Copyleft,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="fixed left-9 top-[360px] -translate-y-1/2 w-56 h-[72vh] bg-gray-700 border border-gray-400 shadow-lg p-5 flex flex-col rounded-lg">
      <h2 className="flex text-lg font-semibold text-white mb-6">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 ">
          <Copyleft size={16} />
        </div>
        All Employee
      </h2>

      <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide">
        PROJECT
      </p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm text-gray-300">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Spotlight size={16} />
          </div>
          <NavLink to="">Arena Sport</NavLink>
        </li>

        <li className="flex items-center gap-2 text-sm text-gray-300 ">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Building2 size={16} />
          </div>
          <NavLink to="">DSV</NavLink>
        </li>

        <li className="flex items-center gap-2 text-sm text-gray-300 ">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Fish size={16} />
          </div>
          <NavLink to="">Seafood Mall</NavLink>
        </li>

        <li className="flex items-center gap-2 text-sm text-gray-300 ">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Flame size={16} />
          </div>
          <NavLink to="">FireStar</NavLink>
        </li>

        <li className="flex items-center gap-2 text-sm text-gray-300 ">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Banknote size={16} />
          </div>
          <NavLink to="">Zeta Bank</NavLink>
        </li>
      </ul>

      <p className="text-xs font-semibold text-gray-400 mt-5 mb-2 tracking-wide">
        STATUS
      </p>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm text-gray-300 ">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Clock size={16} />
          </div>
          <NavLink to="">Full time</NavLink>
        </li>

        <li className="flex items-center gap-2 text-sm text-gray-300 ">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Timer size={16} />
          </div>
          <NavLink to="">Part time</NavLink>
        </li>
      </ul>

      <div className="flex-2" />
      <button className="w-full py-2 bg-purple-600 text-white rounded-2xl font-medium hover:bg-purple-700">
        + Add project
      </button>
    </aside>
  );
}

export default SideBar;
