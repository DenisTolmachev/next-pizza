import { Container, Filters, TopBar } from '@/components/shared';
import { Title } from '@/components/shared/title';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filtering */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список продуктів</div>
          </div>
        </div>
      </Container>
    </>
  );
}
