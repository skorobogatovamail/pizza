"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./Title";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useFetchIngredients } from "@/hooks/useFetchIngredients";
import { useFilters } from "@/hooks/useFilters";
import { useQueryFilters } from "@/hooks/useQueryFilters";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {

  const { ingredients, loading } = useFetchIngredients()
  const filters = useFilters()
  useQueryFilters(filters)

  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" className="font-bold mb-5"></Title>
      <div className="mt-5">
        <CheckboxFiltersGroup
          title="Тип теста"
          name="dough"
          items={[
            { id: 1, name: 'Тонкое', },
            { id: 2, name: 'Толстое', },
          ]}
          limit={6}
          loading={loading}
          onClickCheckbox={filters.setPizzaTypes}
          selectedIds={filters.selectedPizzaTypes}
        />
      </div>

      <div className="mt-5">
        <CheckboxFiltersGroup
          title="Размеры"
          name="sizes"
          items={[
            { id: 1, name: '20 см', },
            { id: 2, name: '30 см', },
            { id: 3, name: '40 см', },
          ]}
          limit={6}
          loading={loading}
          onClickCheckbox={filters.setSizes}
          selectedIds={filters.selectedSizes}
        />
      </div>

      <div className="mt-5">
        <div className="w-fill h-[1px] bg-gray-200"></div>
        <p className="font-bold mb-3 mt-5">Цена от и до</p>
        <div className="flex gap-4 my-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={filters.priceRange.priceFrom || 0}
            defaultValue={0}
            onChange={(e) => filters.setPriceRange("priceFrom", Number(e.target.value))}
          ></Input>
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={filters.priceRange.priceTo || 1000}
            onChange={(e) => filters.setPriceRange("priceTo", Number(e.target.value))}
          ></Input>
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.priceRange.priceFrom || 0, filters.priceRange.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            filters.setPriceRange({ priceFrom: priceFrom, priceTo: priceTo })
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
            filters.setSelectedIngredients(id);
          }}
          selectedIds={filters.selectedIngredients}
        />
      </div>
    </div>
  );
};
