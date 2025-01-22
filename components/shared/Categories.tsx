'use client';

import { cn } from "@/lib/utils";
import { useStore } from "@/store/category";
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

export const Categories: React.FC<Props> = ({ className }) => {
  const activeId = useStore((state) => state.activeId);

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
            href={`/#${name}`}
            key={name}
            className={cn("flex items-center font-bold py-3 px-5 rounded-2xl",
              activeId - 1 === id && 'bg-white text-primary shadow-gray-200 shadow-md')}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
