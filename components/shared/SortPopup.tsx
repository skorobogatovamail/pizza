
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return <div className={cn("bg-gray-50 rounded-2xl inline-flex gap-1 items-center h-[52px] px-5", className)}>
    <ArrowUpDown size={16} />
    <p>Сортировка:</p>
    <p className="text-primary">по рейтингу</p>
  </div>
}