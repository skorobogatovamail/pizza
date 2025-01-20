"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { FiltersCheckbox } from "./FiltersCheckbox";
import { Input } from "../ui/input";


interface Item {
  text: string;
  value: string;
}

interface Props {
  className?: string;
  title?: string;
  items: Item[];
  limit?: number;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title = "Ингредиенты",
  items,
  limit = 6,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [itemsToMap, setitemsToMap] = useState(items?.slice(0, limit));

  useEffect(
    () => collapsed ? setitemsToMap(items?.slice(0, limit)) : setitemsToMap(items),
    [collapsed, items, limit]
  )

  return (

    <div className="pt-5">
      <Title text={title} className="font-bold mb-5"></Title>
      {!collapsed && <div className="mb-5">
        <Input type="string" placeholder="Поиск" className="bg-gray-50 border-none"></Input>
      </div>}
      <div className={cn("flex flex-col gap-4 max-h-96 pr-2 overflow-auto srollbar", className)}>
        {itemsToMap?.map((el) => {
          return (
            <FiltersCheckbox key={el.value} text={el.text} value={el.value} />
          );
        })}
      </div>
      <div className={!collapsed ? 'border-t border-t-neutral-100 mt-4' : ''}>
        <button className="text-primary mt-3" onClick={() => setCollapsed((prev) => !prev)
        }>{collapsed ? '+ Раскрыть' : 'Скрыть'}</button>
      </div>

    </div>


  );
};
