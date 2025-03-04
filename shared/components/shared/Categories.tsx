"use client";

// import { categories } from "@/lib/constants/categories";
import { cn } from "@/shared/lib/utils";
import { useStore } from "@/shared/store/category";
import { Category } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  categories: Category[];
}

export const Categories: React.FC<Props> = ({ className, categories }) => {
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
      {categories.map((el, id) => {
        return (
          <Link
            href={`/#${el.name}`}
            key={el.name}
            className={cn(
              "flex items-center font-bold py-3 px-5 rounded-2xl",
              activeId - 1 === id &&
              "bg-white text-primary shadow-gray-200 shadow-md"
            )}
          >
            {el.name}
          </Link>
        );
      })}
    </div>
  );
};
