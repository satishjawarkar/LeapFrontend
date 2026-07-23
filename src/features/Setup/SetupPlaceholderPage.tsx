import { useLocation } from "react-router-dom";

export function SetupPlaceholderPage() {
  const location = useLocation();

  const title = location.pathname
    .split("/")
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="p-6">
      <h2 className="mb-4 text-base font-semibold text-[#0669b2]">
        {title}
      </h2>

      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-400">
        This section is coming soon.
      </div>
    </div>
  );
}
