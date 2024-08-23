import { Container, TopBar } from "@/components/shared";
import { Title } from "@/components/shared/title";



export default function Home() {
  return (
  <>
    <Container className="mt-10">
      <Title text="Всі піци" size="lg" className="font-extrabold"/>
    </Container>

    <TopBar />
    <div style={{height: '11000px'}}></div>
  </>
  );
}
