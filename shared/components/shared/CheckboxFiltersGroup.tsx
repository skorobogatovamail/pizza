"use client";

import { cn } from "@/shared/lib/utils";
import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { FiltersCheckbox } from "./FiltersCheckbox";
import { Input } from "../ui/input";
import { Ingredient } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";


interface Props {
  className?: string;
  title?: string;
  name?: string;
  items: Pick<Ingredient, 'name' | 'id'>[];
  limit?: number;
  loading: boolean;
  onClickCheckbox: (id: string) => void;
  selectedIds: Set<string>
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  className,
  title = "Ингредиенты",
  items,
  limit = 6,
  loading,
  onClickCheckbox,
  selectedIds
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [itemsToMap, setitemsToMap] = useState(items?.slice(0, limit));
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(
    () => collapsed ? setitemsToMap(items?.slice(0, limit)) : setitemsToMap(items.filter(el => el.name.toLowerCase().includes(searchValue))),
    [collapsed, items, limit, searchValue]
  )

  if (loading) {
    return (
      <div className="pt-5">
        <Title text={title} className="font-bold mb-5"></Title>
        {Array(limit).fill(0).map((_, idx) => <Skeleton key={idx} className="rounded-[8px] h-6 mb-4 bg-gray-50" />)}
      </div>
    )
  }

  return (
    <div className="pt-5">
      <Title text={title} className="font-bold mb-5"></Title>
      {!collapsed && <div className="mb-5">
        <Input type="string" placeholder="Поиск" className="bg-gray-50 border-none" onChange={onChangeSearchValue} ></Input>
      </div>}
      <div className={cn("flex flex-col gap-4 max-h-96 pr-2 overflow-auto srollbar", className)}>
        {itemsToMap?.map((el) =>
          <FiltersCheckbox
            key={el.id}
            text={el.name}
            value={String(el.id)}
            onCheckedChange={() => onClickCheckbox(String(el.id))}
            checked={selectedIds.has(String(el.id))}
          />)
        }
      </div>
      <div className={!collapsed ? 'border-t border-t-neutral-100 mt-4' : ''}>
        <button className="text-primary mt-3" onClick={() => setCollapsed((prev) => !prev)
        }>{collapsed ? '+ Раскрыть' : 'Скрыть'}</button>
      </div>

    </div>
  );
};
