import { Container } from "@/shared/components/shared/Container";
import { Filters } from "@/shared/components/shared/Filters";
import { ProductList } from "@/shared/components/shared/ProductList";
import { Title } from "@/shared/components/shared/Title";
import { TopBar } from "@/shared/components/shared/TopBar";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
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
      <TopBar categories={categories.filter(el => el.products)} />
      <Container className="mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            {
              categories.length > 0 && (
                categories.map(category => (category.products && (
                  <ProductList
                    key={category.id}
                    items={category.products}
                    title={category.name}
                    categoryId={category.id} />
                )))
              )
            }
          </div>
        </div>
      </Container>
    </>
  );
}
