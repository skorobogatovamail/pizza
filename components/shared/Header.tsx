import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container>
        <div>
          <Image src="logo.png" alt="logo"></Image>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <Button />
        </div>
      </Container>
    </header>
  );
};
