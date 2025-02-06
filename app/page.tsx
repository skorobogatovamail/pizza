import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/Filters";
import { ProductList } from "@/components/shared/ProductList";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { pizzas } from "@/lib/constants/pizzas";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          productItems: true,
          ingredients: true
        }
      }
    }
  })
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductList items={pizzas} title="Пиццы" categoryId={1} />
            <ProductList items={pizzas} title="Комбо" categoryId={2} />
            <ProductList items={pizzas} title="Завтрак" categoryId={3} />
          </div>
        </div>
      </Container>
    </>
  );
}
