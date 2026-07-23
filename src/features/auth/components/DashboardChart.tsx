import { motion } from "framer-motion";

export function DashboardChart() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        p-5
        backdrop-blur-md
      "
    >
      <div className="mb-5 flex items-center justify-between">

        <h3 className="font-semibold">
          Revenue
        </h3>

        <span className="text-green-300">
          +23.8%
        </span>

      </div>

      <svg
        viewBox="0 0 300 100"
        className="w-full"
      >
        <motion.path
          d="M0 80 L40 55 L80 70 L120 30 L160 42 L200 15 L240 35 L280 8"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </svg>
    </div>
  );
}