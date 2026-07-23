import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Popover } from "@base-ui/react/popover";
import { Calendar } from "./Calendar";

interface DatePickerProps {
  value?: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function DatePicker({ value, onChange, minDate, maxDate, placeholder = "Select date" }: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        className="
          flex
          h-12
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          text-sm
          transition-all
          focus:border-primary
          focus:ring-2
          focus:ring-primary/20
        "
      >
        <span className={value ? "text-slate-700" : "text-slate-400"}>
          {value ? formatDate(value) : placeholder}
        </span>
        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
      </Popover.Trigger>

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