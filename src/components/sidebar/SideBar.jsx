import React, { useEffect, useRef, useState } from "react";
import { Spotlight, Building2, Fish, Flame, Banknote, Clock, Timer, Copyleft,} from "lucide-react";
import { NavLink } from "react-router-dom";

function slugify(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]/g, "");
}

const ICON_OPTIONS = [
  { id: "spotlight", label: "Spotlight", component: Spotlight },
  { id: "building", label: "Building", component: Building2 },
  { id: "fish", label: "Fish", component: Fish },
  { id: "firestar", label: "FireStar", component: Flame },
  { id: "banknote", label: "Bank", component: Banknote },
];

function getIconComponent(iconId) {
  const match = ICON_OPTIONS.find((opt) => opt.id === iconId);
  return match?.component ?? Spotlight;
}

export default function SideBar() {
  const builtinProjects = [
    { id: "arena-sport", name: "Arena Sport", icon: "spotlight" },
    { id: "dsv", name: "DSV", icon: "building" },
    { id: "seafood-mall", name: "Seafood Mall", icon: "fish" },
    { id: "flame", name: "Flame", icon: "flame" },
    { id: "zeta-bank", name: "Zeta Bank", icon: "banknote" },
  ];

  const [projects, setProjects] = useState(() => {
    try {
      const raw = localStorage.getItem("sidebar.projects");
      return raw ? JSON.parse(raw) : builtinProjects;
    } catch {
      return builtinProjects;
    }
  });

  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("spotlight");
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("sidebar.projects", JSON.stringify(projects));
    } catch {}
  }, [projects]);

  useEffect(() => {
    if (adding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [adding]);

  function handleAddClick() {
    setAdding((v) => !v);
    setError("");
    setNewName("");
  }

  function handleSubmit(e) {
    e?.preventDefault?.();
    const name = newName.trim();
    if (!name) {
      setError("Please enter a project name.");
      return;
    }
    const id = slugify(name);
    if (!id) {
      setError("Project name must contain letters or numbers.");
      return;
    }
    if (projects.some((p) => p.id === id)) {
      setError("A project with that name already exists.");
      return;
    }

    const newProject = {
      id,
      name,
      icon: selectedIcon,
    };

    setProjects((prev) => [...prev, newProject]);
    setNewName("");
    setAdding(false);
    setError("");
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setAdding(false);
      setNewName("");
      setError("");
    }
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <aside className="fixed left-4 md:left-9 top-[360px] -translate-y-1/2 w-56 md:w-64 h-[72vh] bg-gray-700 border border-gray-400 shadow-lg p-5 flex flex-col rounded-lg">
      <h2 className="flex items-center gap-3 text-lg font-semibold text-white mb-4">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
          <Copyleft size={16} />
        </div>
        All Employee
      </h2>

      <p className="text-xs font-semibold text-gray-400 mb-2 tracking-wide">
        PROJECT
      </p>

      <ul className="space-y-2 flex-1 overflow-auto pr-1">
        {projects.map((p) => {
          const IconComp = getIconComponent(p.icon);
          return (
            <li
              key={p.id}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
                <IconComp size={16} />
              </div>
              <NavLink
                to={`/${p.id}`}
                className={({ isActive }) =>
                  "truncate " +
                  (isActive ? "text-white font-semibold" : "text-gray-200")
                }
              >
                {p.name}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <p className="text-xs font-semibold text-gray-400 mt-5 mb-2 tracking-wide">
        STATUS
      </p>

      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-sm text-gray-300">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Clock size={16} />
          </div>
          <NavLink to="">Full time</NavLink>
        </li>

        <li className="flex items-center gap-2 text-sm text-gray-300">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400">
            <Timer size={16} />
          </div>
          <NavLink to="">Part time</NavLink>
        </li>
      </ul>

      <div className="mt-4">
        {!adding && (
          <button
            onClick={handleAddClick}
            className="w-full py-2 bg-purple-600 text-white rounded-2xl font-medium hover:bg-purple-700 transition"
            aria-expanded={adding}
            aria-controls="add-project-area"
          >
            + Add project
          </button>
        )}

        {adding && (
          <form
            id="add-project-area"
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Project name"
                className="flex-1 px-3 py-2 rounded-lg text-sm bg-gray-100 text-gray-800 focus:outline-none"
                aria-label="New project name"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Add
              </button>
            </div>

            
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-300">Select icon</p>
              <div className="flex flex-wrap gap-2">
                {ICON_OPTIONS.map((opt) => {
                  const IconComp = opt.component;
                  const selected = selectedIcon === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedIcon(opt.id)}
                      className={
                        "flex items-center gap-1 px-2 py-1 rounded-lg border text-xs transition " +
                        (selected
                          ? "bg-purple-600 border-purple-400 text-white"
                          : "bg-gray-600 border-gray-500 text-gray-100 hover:bg-gray-500")
                      }
                    >
                      <IconComp size={14} />
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setAdding(false);
                  setNewName("");
                  setError("");
                }}
                className="flex-1 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition text-sm"
              >
                Cancel
              </button>
            </div>

            {error && <div className="text-xs text-red-300">{error}</div>}
          </form>
        )}
      </div>
    </aside>
  );
}
