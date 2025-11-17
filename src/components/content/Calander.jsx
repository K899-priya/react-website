import React, { useState } from "react";
import { StepBack, StepForward } from "lucide-react";

export default function Calendar() {
  const today = new Date();
  const [shownDate, setShownDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(null);

  const year = shownDate.getFullYear();
  const month = shownDate.getMonth(); // 0-indexed

  function changeMonth(delta) {
    const newMonth = new Date(year, month + delta, 1);
    setShownDate(newMonth);
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const startWeekday = new Date(year, month, 1).getDay();

  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const monthLabel = shownDate.toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  });

  function isSameDay(a, b) {
    if (!a || !b) return false;
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  return (
    <div>
      <h2 className=" fixed text-lg font-semibold mb-2">Calander</h2>
      <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-2xl mb-4">
            <button
              aria-label="Previous month"
              onClick={() => changeMonth(-1)}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              <StepBack size={20} />
            </button>

            <h3 className="text-lg font-semibold text-gray-700">
              {monthLabel}
            </h3>

            <button
              aria-label="Next month"
              onClick={() => changeMonth(1)}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              <StepForward size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 bg-white p-4 rounded-2xl shadow-lg">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div
                key={d}
                className="text-center font-semibold text-gray-600 text-sm"
              >
                {d}
              </div>
            ))}

            {cells.map((cell, idx) => {
              if (!cell) return <div key={`empty-${idx}`} />;

              const isToday = isSameDay(cell, today);
              const isSelected = selectedDate && isSameDay(cell, selectedDate);

              let className =
                "text-center py-2 rounded-lg hover:bg-blue-100 text-gray-700 cursor-pointer";
              if (isSelected)
                className =
                  "text-center py-2 rounded-lg bg-blue-500 text-white font-bold shadow cursor-pointer";
              else if (isToday)
                className =
                  "text-center py-2 rounded-lg border border-blue-300 text-gray-800 font-semibold cursor-pointer";

              return (
                <button
                  key={cell.toISOString()}
                  onClick={() => setSelectedDate(cell)}
                  className={className}
                  aria-pressed={isSelected}
                  title={cell.toDateString()}
                >
                  {cell.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-4 text-sm text-gray-600">
            {selectedDate ? (
              <div>
                Selected: <strong>{selectedDate.toDateString()}</strong>
              </div>
            ) : (
              <div>No date selected — click a day to select it.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
