import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import { LinkCardList } from "@/entities/link/ui";

export default function Home() {
  return (
    <>
      <Header />
      <LinkCardList />
      <Footer />
    </>
  );
}
