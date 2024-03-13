"use client";

import { useState, ImgHTMLAttributes } from "react";
import { EmptyImgIcon } from "../icons";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: undefined | null | string;
}

export function ImageWithFallback({ src, ...rest }: Props) {
  const [fallback, setFallback] = useState(false);
  console.log(src);
  if (!src || fallback) {
    return (
      <div className={cx("fallback-wrapper")}>
        <EmptyImgIcon />
      </div>
    );
  }

  return (
    <img
      {...rest}
      src={src}
      onError={() => {
        console.log("?");
        setFallback(true);
      }}
    />
  );
}
