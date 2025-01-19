import { Container, Filters, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { Title } from '@/components/shared/title';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Filtering */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title='Піци'
                categoryId={1}
                items={[
                  { id: 1,
                    name: 'Піца "Чізбургер"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/chyzburger-265x265.png',
                    price: 230,
                    items: [{price: 230}]
                  },
                  { id: 2,
                    name: 'Піца "Гетьманська"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/getmanska-1-e1605024813823-265x265.png',
                    price: 185,
                    items: [{price: 185}]
                  },
                  { id: 3,
                    name: 'Піца "Карбонара"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/karbonara--e1605026649950-265x265.png',
                    price: 145,
                    items: [{price: 145}]
                  },
                  { id: 4,
                    name: 'Піца "Пікнік"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/karbonara--e1605026649950-265x265.png',
                    price: 140,
                    items: [{price: 140}]
                  },
                ]}
              />

              <ProductsGroupList
                title='Тортільї'
                categoryId={2}
                items={[
                  { id: 1,
                    name: 'Тортілья з сьомгою',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/tortilla-semga-1-265x265.jpg',
                    price: 150,
                    items: [{price: 150}]
                  },
                  { id: 2,
                    name: 'Тортілья "Буфало"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/tortilla-goviadina-1-265x265.jpg',
                    price: 130,
                    items: [{price: 130}]
                  },
                  { id: 3,
                    name: 'Тортілья "Середземна"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/tortilla-sredizem-1-265x265.jpg',
                    price: 150,
                    items: [{price: 150}]
                  },
                  { id: 4,
                    name: 'Тортілья "Жульєн"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/tortilla-zhulien-1-265x265.jpg',
                    price: 130,
                    items: [{price: 130}]
                  },
                ]}
              />

              <ProductsGroupList
                title='Піти'
                categoryId={3}
                items={[
                  { id: 1,
                    name: 'Піта "Овочева"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg',
                    price: 105,
                    items: [{price: 105}]
                  },
                  { id: 2,
                    name: 'Піта "Кукряча"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/PYTA-2-265x265.jpg',
                    price: 125,
                    items: [{price: 125}]
                  },
                  { id: 3,
                    name: 'Піта "Баварська"',
                    imageUrl: 'https://mavrapizza.com/wp-content/uploads/PYTA-3-e1608028640939-265x265.jpg',
                    price: 115,
                    items: [{price: 115}]
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
