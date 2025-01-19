"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Title } from "./Title";
import { FiltersCheckbox } from "./FiltersCheckbox";

interface Item {
  text: string;
  value: string;
}

interface Props {
  className?: string;
  title?: string;
  items?: Item[];
  defaultItems?: Item[];
  limit?: number;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title,
  items,
  defaultItems,
  limit,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const itemsToMap = items ? items : defaultItems;

  return (
    <>
      <Title text={title || "Ингредиенты"} className="font-bold mb-5"></Title>
      <div className={cn("flex flex-col gap-4", className)}>
        {itemsToMap?.map((el) => {
          return (
            <FiltersCheckbox key={el.value} text={el.text} value={el.value} />
          );
        })}
      </div>
      <button onClick={(prev) => setCollapsed(!prev)}>+</button>
    </>
  );
};
