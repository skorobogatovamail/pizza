import { cn } from "@/shared/lib/utils";
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
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-[32px]",
  xl: "text-[40px]",
  "2xl": "text-[48px]",
};

export const Title: React.FC<Props> = ({ className, size = "sm", text }) => {
  return React.createElement(
    mapTagBySize[size],
    { className: cn(mapClassnameBySize[size], className) },
    text
  );
};
