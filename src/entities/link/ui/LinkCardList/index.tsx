import { LinkCard } from "../LinkCard";
import { getLinks } from "../../api";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export async function LinkCardList() {
  const links = await getLinks();

  return (
    <ul className={cx("container")}>
      {links?.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
