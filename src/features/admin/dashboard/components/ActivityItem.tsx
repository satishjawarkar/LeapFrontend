import { cn } from "../../../../lib/utils";

type ActivityItemProps = {
  title: string;
  time: string;
  icon: React.ElementType;
  color: string;
};

export function ActivityItem({
  title,
  time,
  icon: Icon,
  color,
}: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-muted/50">
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          color,
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>

        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}
