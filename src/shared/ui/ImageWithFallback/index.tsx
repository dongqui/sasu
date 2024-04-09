"use client";

import { EmptyImgIcon } from "../icons";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function ImageFallback() {
  return (
    <div className={cx("fallback-wrapper")}>
      <EmptyImgIcon />
    </div>
  );
}
