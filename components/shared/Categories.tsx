import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
  "Десерты",
];

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex",
        "gap-1",
        "bg-gray-50",
        "p-1",
        "rounded-2xl",
        className
      )}
    >
      {" "}
      {cats.map((name) => {
        return (
          <Link
            href=""
            key={name}
            className="flex items-center bg-white rounded-2xl font-bold py-3 px-6"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
