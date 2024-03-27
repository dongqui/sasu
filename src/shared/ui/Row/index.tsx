import { PropsWithChildren } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  gap?: number;
  justifyContent?: "space-between" | "normal";
}

export function Row({
  children,
  gap = 4,
  justifyContent = "normal",
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cx("row")}
      style={{
        gap,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}
