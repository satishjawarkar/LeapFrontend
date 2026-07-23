import { HandCoins, Users, Monitor, ArrowRight } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { DatePicker } from "../../../components/ui/DatePicker";
import { useState } from "react";

const MODULES = [
  { id: "loan", label: "Loan", icon: HandCoins },
  { id: "hr", label: "HR", icon: Users },
  { id: "mis", label: "MIS", icon: Monitor },
];

export function HomePage() {
  const [dob,setDob]=useState<Date | null>(null);
  return (
    <div className="p-6">
      <h2 className="mb-4 text-base font-semibold text-slate-800">Modules</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((mod) => {
          const Icon = mod.icon;

          return (
            <button
              key={mod.id}
              type="button"
              className="group relative flex items-center gap-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#0f8fa8] to-[#0669b2] px-6 py-5 text-left text-white shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <Icon className="h-5 w-5 text-[#0669b2]" />
              </span>

              <span className="text-lg font-semibold">{mod.label}</span>

              <span className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-tl-2xl bg-white/90 text-slate-700">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#0669b2]">
          Announcements
        </h2>

        <button
          type="button"
          className="rounded-md bg-[#0669b2] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#055a98]"
        >
          Add Announcement
        </button>
      </div>
      
      <div className="mt-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm text-slate-600">DOB</label>
        <DatePicker className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-500 focus:border-[#0669b2] focus:outline-none" value={dob} onChange={setDob} maxDate={new Date()} />
      </div>
          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Financial Year
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-500 focus:border-[#0669b2] focus:outline-none">
              <option>Please select</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Example Input
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-500 focus:border-[#0669b2] focus:outline-none">
              <option>Please select</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Example Input
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-500 focus:border-[#0669b2] focus:outline-none">
              <option>Please select</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            className="rounded-md bg-[#0669b2] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#055a98]"
          >
            Search
          </button>

          <button
            type="button"
            className="rounded-md bg-slate-200 px-6 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-300"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#0669b2] text-white">
              <th className="w-16 px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Subject</th>
              <th className="px-4 py-3 font-medium">Attachment</th>
              <th className="px-4 py-3 font-medium">Publish Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                No announcements found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
