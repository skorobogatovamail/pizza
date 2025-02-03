"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { useFiltersIngredients } from "@/hooks/useFiltersIngredients";
import { useSet } from "react-use";
import QueryString from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {

  const searchParams = useSearchParams()
  const router = useRouter();

  const { ingredients, loading, onAddId, selectedIds: selectedIngredients } =
    useFiltersIngredients();

  const [priceRange, setPriceRange] = useState<PriceProps>({});

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPriceRange({ ...priceRange, [name]: value });
  };

  const [selectedSizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [selectedPizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

  useEffect(() => {
    const filters = {
      ...priceRange,
      pizzaTypes: Array.from(selectedPizzaTypes),
      sizes: Array.from(selectedSizes),
      ingredients: Array.from(selectedIngredients)
    }
    const query = QueryString.stringify(filters, {
      arrayFormat: 'comma'
    })
    router.push(`?${query}`, { scroll: false })

  }, [priceRange, selectedIngredients, selectedSizes, selectedPizzaTypes])


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
          onClickCheckbox={togglePizzaTypes}
          selectedIds={selectedPizzaTypes}
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
          onClickCheckbox={toggleSizes}
          selectedIds={selectedSizes}
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
            max={priceRange.priceFrom || 0}
            defaultValue={0}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          ></Input>
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={priceRange.priceTo || 1000}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          ></Input>
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[priceRange.priceFrom || 0, priceRange.priceTo || 1000]}
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
          selectedIds={selectedIngredients}
        />
      </div>
    </div>
  );
};
