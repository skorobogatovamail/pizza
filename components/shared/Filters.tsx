import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./Title";
import { FiltersCheckbox } from "./FiltersCheckbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
import { defaultItems, items } from "@/lib/constants/items";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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
                        max={30000}
                        defaultValue={0}
                    ></Input>
                    <Input
                        type="number"
                        placeholder="30000"
                        min={100}
                        max={30000}
                    ></Input>
                </div>
                <RangeSlider min={0} max={30000} step={100}></RangeSlider>
            </div>

            <div className="mt-5">
                <CheckboxFiltersGroup
                    title="Ингредиенты"
                    items={items}
                    limit={6}
                />
            </div>
        </div>
    );
};
