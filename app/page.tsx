import { Container } from "@/components/shared/Container";
import { Filters } from "@/components/shared/Filters";
import { ProductList } from "@/components/shared/ProductList";
import { Title } from "@/components/shared/Title";
import { TopBar } from "@/components/shared/TopBar";
import { pizzas } from "@/lib/constants/pizzas";

export default function Home() {
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
          <div>
            <ProductList items={pizzas} title="Пиццы" categoryId={1} />
          </div>
        </div>
      </Container>
    </>
  );
}
