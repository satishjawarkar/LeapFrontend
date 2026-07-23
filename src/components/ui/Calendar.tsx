import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  selected?: Date | null;
  onSelect: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date) {
  if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) return true;
  if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999))) return true;
  return false;
}

export function Calendar({ selected, onSelect, minDate, maxDate, className }: CalendarProps) {
  const [viewDate, setViewDate] = useState(selected ?? new Date());

  // agar bahar se selected date badle (manual input se), calendar view bhi sync ho
  useEffect(() => {
    if (selected) setViewDate(selected);
  }, [selected]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startWeekday = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const goToPrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const goToNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const handleMonthChange = (newMonth: number) => {
    setViewDate(new Date(year, newMonth, 1));
  };

  const handleYearChange = (newYear: number) => {
    setViewDate(new Date(newYear, month, 1));
  };

  const cells: { date: Date; currentMonth: boolean }[] = [];

  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), currentMonth: true });
  }
  const remaining = 7 - (cells.length % 7);
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      cells.push({ date: new Date(year, month + 1, d), currentMonth: false });
    }
  }

  const today = new Date();

  // Year range: minDate se maxDate tak, ya default current year ke +/- 100 saal (DOB use case ke liye)
  const yearRangeStart = minDate ? minDate.getFullYear() : today.getFullYear() - 100;
  const yearRangeEnd = maxDate ? maxDate.getFullYear() : today.getFullYear() + 10;
  const yearOptions: number[] = [];
  for (let y = yearRangeEnd; y >= yearRangeStart; y--) yearOptions.push(y);

  return (
    <div className={`w-[280px] rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className ?? ""}`}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-1">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1">
          {/* Month select */}
          <select
            value={month}
            onChange={(e) => handleMonthChange(Number(e.target.value))}
            className="
              cursor-pointer
              rounded-md
              border-none
              bg-transparent
              px-1
              py-1
              text-sm
              font-semibold
              text-[#123B6D]
              outline-none
              hover:bg-slate-100
            "
          >
            {MONTH_NAMES.map((name, idx) => (
              <option key={name} value={idx}>
                {name}
              </option>
            ))}
          </select>

          {/* Year select */}
          <select
            value={year}
            onChange={(e) => handleYearChange(Number(e.target.value))}
            className="
              cursor-pointer
              rounded-md
              border-none
              bg-transparent
              px-1
              py-1
              text-sm
              font-semibold
              text-[#123B6D]
              outline-none
              hover:bg-slate-100
            "
          >
            {yearOptions.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={goToNextMonth}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Weekday labels */}
      <div className="mb-1 grid grid-cols-7 text-center">
        {WEEKDAYS.map((day) => (
          <span key={day} className="text-xs font-medium text-slate-400">
            {day}
          </span>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map(({ date, currentMonth }, idx) => {
          const disabled = isDateDisabled(new Date(date), minDate, maxDate);
          const isSelected = selected ? isSameDay(date, selected) : false;
          const isToday = isSameDay(date, today);

          return (
            <button
              key={idx}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(date)}
              className={`
                mx-auto flex h-8 w-8 items-center justify-center rounded-lg text-sm
                transition-colors
                ${!currentMonth ? "text-slate-300" : "text-slate-700"}
                ${disabled ? "cursor-not-allowed opacity-40" : "hover:bg-primary/10"}
                ${isSelected ? "login-box text-white hover:opacity-90" : ""}
                ${isToday && !isSelected ? "border border-primary/40" : ""}
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}