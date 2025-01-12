import { cn } from "@/lib/utils";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface Props {
  className?: string;
  size?: TitleSize;
  text: string;
}

const mapTagBySize = {
  xs: "h5",
  sm: "h4",
  md: "h3",
  lg: "h2",
  xl: "h1",
  "2xl": "h1",
};

const mapClassnameBySize = {
  xs: "text-[16px]",
  sm: "text-[16px]",
  md: "text-[16px]",
  lg: "text-[16px]",
  xl: "text-[16px]",
  "2xl": "text-[16px]",
};

export const Title: React.FC<Props> = ({ className, size = "sm", text }) => {
  return React.createElement(
    mapTagBySize[size],
    { className: cn(mapClassnameBySize[size], className) },
    text
  );
};
