import { LinkCard } from "../LinkCard";
import supabase from "@/shared/config/supabase";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export async function LinkCardList() {
  const links = await supabase.from("Link").select();

  return (
    <ul className={cx("container")}>
      {links.data?.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
