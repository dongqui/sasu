import { PropsWithChildren } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  gap: number;
}

export function Row({ children, gap }: PropsWithChildren<Props>) {
  return (
    <div
      className={cx("row")}
      style={{
        gap,
      }}
    >
      {children}
    </div>
  );
}
