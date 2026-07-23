import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

type Scheme = {
  id: number;
  name: string;
  description: string;
};

const INITIAL_SCHEMES: Scheme[] = [
  { id: 1, name: "Term Loan (General Loan)", description: "Term Loan (General Loan)" },
  { id: 2, name: "Education Loan Scheme", description: "Education Loan Scheme" },
  { id: 3, name: "New Swarnima Scheme", description: "New Swarnima Scheme" },
  { id: 4, name: "Shilp Sampadha", description: "Shilp Sampadha" },
  { id: 5, name: "Saksham", description: "Saksham" },
  { id: 6, name: "Micro Finance Scheme", description: "Micro Finance Scheme" },
  { id: 7, name: "Mahila Samridhi Yojana", description: "Mahila Samridhi Yojana" },
  { id: 8, name: "Krishi Sampada", description: "Krishi Sampada" },
  { id: 9, name: "Margin Money Loan", description: "Margin Money" },
  { id: 10, name: "Small Loan Scheme", description: "Small Loan Scheme" },
];

export function SchemeSetupPage() {
  const [schemes] = useState<Scheme[]>(INITIAL_SCHEMES);
  const [schemeName, setSchemeName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="p-6">
      <h2 className="mb-4 text-base font-semibold text-[#0669b2]">
        Scheme Setup
      </h2>

      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Scheme Name
            </label>
            <input
              type="text"
              value={schemeName}
              onChange={(e) => setSchemeName(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0669b2] focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Applicable to
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#0669b2] focus:outline-none">
              <option>All</option>
              <option>Individual</option>
              <option>Group</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-600">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0669b2] focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-[#0669b2] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#055a98]"
          >
            Save
          </button>
        </div>
      </div>

      <h3 className="mb-2 mt-6 text-sm font-semibold text-slate-700">
        Scheme List
      </h3>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#0669b2] text-white">
              <th className="w-16 px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Scheme Name</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="w-28 px-4 py-3 text-center font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme, idx) => (
              <tr
                key={scheme.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-4 py-3 text-slate-700">{scheme.id}</td>
                <td className="px-4 py-3 text-slate-700">{scheme.name}</td>
                <td className="px-4 py-3 text-slate-700">
                  {scheme.description}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3 text-slate-500">
                    <button type="button" aria-label="Edit" className="hover:text-[#0669b2]">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button type="button" aria-label="Delete" className="hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
