import { PropsWithChildren } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  gap: number;
}

export function Stack({ children, gap }: PropsWithChildren<Props>) {
  return (
    <div
      className={cx("stack")}
      style={{
        gap,
      }}
    >
      {children}
    </div>
  );
}
