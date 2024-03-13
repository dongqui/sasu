"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "solid" | "second";
}

export function Button({
  children,
  color = "solid",
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <button className={cx("button", color)} {...rest}>
      {children}
    </button>
  );
}
