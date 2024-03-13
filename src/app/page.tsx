import { Header } from "@/widgets/header/ui";
import { Footer } from "@/widgets/footer/ui";
import { LinkCardList } from "@/entities/link/ui/LinkCardList";

import styles from "./page.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const revalidate = 36000000; 

export default function Home() {
  return (
    <main className={cx("main")}>
      <div className={cx("container")}>
        <Header />
        <LinkCardList />
        <Footer />
      </div>
    </main>
  );
}
