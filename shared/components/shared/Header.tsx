import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { CartButton } from "./CartButton";
import { CartDrawer } from "./CartDrawer";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="py-11 flex items-center justify-between">
        <Link href='/'>
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
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-4">

          <Button variant="outline" className="flex items-center gap-1">
            <User height={16} width={16} /> Войти
          </Button>
          <CartButton />

        </div>
      </Container>
    </header>
  );
};
