import { AddLinkForm } from "@/features/admin/ui";

import styles from "./page.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Admin() {
  return (
    <main className={cx('main')}>
      <div className={cx("container")}>
        <AddLinkForm />
      </div>
    </main>
  );
}
