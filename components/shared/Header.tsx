import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="py-11 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            className="w-[35px] h-[35px]"
            src="/logo.png"
            alt="logo"
            width={35}
            height={35}
          />
          <div className="flex flex-col">
            <h1 className="text-2xl uppercase font-black">Next pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              попробуй настоящую пиццу
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-1">
            <User height={16} width={16} /> Войти
          </Button>
          <Button className="group relative">
            <p>530 ₽</p>
            <span className="w-[1px] h-full bg-white/30 mx-3"></span>

            <div className="flex gap-1 items-center group-hover:opacity-0 transition duration-300">
              <ShoppingCart
                className="relative"
                height={16}
                width={16}
                strokeWidth={2}
              />
              <b>3</b>
            </div>

            <ArrowRight className="w-5 right-5 absolute transition duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 "></ArrowRight>
          </Button>
        </div>
      </Container>
    </header>
  );
};
