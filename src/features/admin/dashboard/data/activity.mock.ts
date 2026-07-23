import {
    DollarSign,
    Package,
    Star,
    TriangleAlert,
    UserPlus,
} from "lucide-react";

export const activityFeed = [
    {
        id: 1,
        title: "New order #ORD-8821",
        time: "2 min ago",
        icon: Package,
        color: "bg-violet-100 text-violet-600",
    },
    {
        id: 2,
        title: "Marcus Chen registered",
        time: "15 min ago",
        icon: UserPlus,
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 3,
        title: "5-star review received",
        time: "1 hour ago",
        icon: Star,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        id: 4,
        title: "Low stock alert",
        time: "2 hours ago",
        icon: TriangleAlert,
        color: "bg-orange-100 text-orange-600",
    },
    {
        id: 5,
        title: "Payment received",
        time: "3 hours ago",
        icon: DollarSign,
        color: "bg-green-100 text-green-600",
    },
];