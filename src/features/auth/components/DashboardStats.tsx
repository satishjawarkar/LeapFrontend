import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type DashboardStatProps = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export function DashboardStat({
  title,
  value,
  icon: Icon,
}: DashboardStatProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/10
        p-4
        backdrop-blur-md
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-white/70">
            {title}
          </p>

          <h3 className="mt-1 text-xl font-bold">
            {value}
          </h3>

        </div>

        <div className="rounded-xl bg-white/15 p-3">
          <Icon className="h-5 w-5" />
        </div>

      </div>
    </motion.div>
  );
}