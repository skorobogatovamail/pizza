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
];

const activeIndex = 0;

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
      {cats.map((name, id) => {
        return (
          <Link
            href=""
            key={name}
            className={cn("flex items-center font-bold py-3 px-5 rounded-2xl", activeIndex === id && 'bg-white text-primary shadow-gray-200 shadow-md')}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
