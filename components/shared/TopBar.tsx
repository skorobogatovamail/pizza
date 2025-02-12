import React from "react";
import { Categories } from "./Categories";
import { SortPopup } from "./SortPopup";
import { Container } from "./Container";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
      <Container className="flex items-center justify-between" >
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>

  )
}
