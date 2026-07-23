import type { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
};

export function FeatureItem({
  icon: Icon,
  title,
}: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-md">
      <div className="rounded-lg bg-white/20 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>

      <span className="font-medium text-white">
        {title}
      </span>
    </div>
  );
}