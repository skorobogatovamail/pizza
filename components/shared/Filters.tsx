"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Title } from "./Title";
import { FiltersCheckbox } from "./FiltersCheckbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useFiltersIngredients } from "@/hooks/useFiltersIngredients";

interface Props {
  className?: string;
}
interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } =
    useFiltersIngredients();

  const [priceRange, setPriceRange] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPriceRange({ ...priceRange, [name]: value });
  };

  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" className="font-bold mb-5"></Title>
      <div className="flex flex-col gap-4">
        <FiltersCheckbox text="Можно собирать" value="1" />
        <FiltersCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5">
        <div className="w-fill h-[1px] bg-gray-200"></div>
        <p className="font-bold mb-3 mt-5">Цена от и до</p>
        <div className="flex gap-4 my-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={priceRange.priceFrom}
            defaultValue={0}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          ></Input>
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={priceRange.priceTo}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          ></Input>
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[priceRange.priceFrom, priceRange.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPriceRange({ priceFrom: priceFrom, priceTo: priceTo })
          }
        ></RangeSlider>
      </div>

      <div className="mt-5">
        <CheckboxFiltersGroup
          title="Ингредиенты"
          items={ingredients}
          limit={6}
          loading={loading}
          onClickCheckbox={(id) => {
            onAddId(id);
          }}
          selectedIds={selectedIds}
        />
      </div>
    </div>
  );
};
