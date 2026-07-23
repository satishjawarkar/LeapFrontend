import { useState, useEffect } from "react";
import { CalendarIcon } from "lucide-react";
import { Popover } from "@base-ui/react/popover";
import { Calendar } from "./Calendar";

interface DatePickerProps {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
}

// Date -> "DD/MM/YYYY" (typing/display ke liye)
function formatForInput(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

// "DD/MM/YYYY" string ko Date mein parse karo, invalid ho to null
function parseInputDate(text: string): Date | null {
  const match = text.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return null;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);

  const date = new Date(year, month - 1, day);
  // Validity check: overflow ho gaya (e.g. 31/02) to reject
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date;
}

export function DatePicker({ value, onChange, minDate, maxDate, placeholder = "DD/MM/YYYY" }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState(value ? formatForInput(value) : "");
  const [error, setError] = useState<string | null>(null);

  // bahar se value badle (calendar select se), input text bhi sync karo
  useEffect(() => {
    setInputText(value ? formatForInput(value) : "");
    setError(null);
  }, [value]);

  const handleInputChange = (text: string) => {
    setInputText(text);

    if (text.trim() === "") {
      setError(null);
      onChange(null);
      return;
    }

    const parsed = parseInputDate(text);
    if (!parsed) {
      setError("Use format DD/MM/YYYY");
      return;
    }

    if (minDate && parsed < new Date(minDate.setHours(0, 0, 0, 0))) {
      setError("Date is too early");
      return;
    }
    if (maxDate && parsed > new Date(maxDate.setHours(23, 59, 59, 999))) {
      setError("Date is too late");
      return;
    }

    setError(null);
    onChange(parsed);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <div className="relative">
        <input
          type="text"
          value={inputText}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setOpen(true)}
          className={`
            h-12
            w-full
            rounded-xl
            border
            bg-white
            px-4
            pr-10
            text-sm
            transition-all
            focus:ring-2
            focus:ring-primary/20
            ${error ? "border-red-400" : "border-slate-300 focus:border-primary"}
          `}
        />

        <Popover.Trigger
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-muted-foreground
            hover:text-primary
          "
        >
          <CalendarIcon className="h-4 w-4" />
        </Popover.Trigger>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      <Popover.Portal>
        <Popover.Positioner sideOffset={8} align="start">
          <Popover.Popup className="z-50">
            <Calendar
              selected={value}
              minDate={minDate}
              maxDate={maxDate}
              onSelect={(date) => {
                onChange(date);
                setOpen(false);
              }}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}