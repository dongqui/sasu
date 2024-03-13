import type { Link } from "@/shared/config/types";
import { timeSinceFormat } from "@/shared/lib";
import { ImageWithFallback } from "@/shared/ui";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props extends Link {}

export function LinkCard({ title, description, image, created_at, url }: Props) {
  return (
    <a className={cx("container")} href={url} target="_blank">
      <div className={cx("img-wrapper")}>
        <ImageWithFallback src={image} alt="link meta data image" />
      </div>
      <div className={cx("content")}>
        <h2>{description}</h2>
        <div className={cx("title")}>{title}</div>
        <div className={cx("info")}>
          00명이 구경함 - {timeSinceFormat(created_at)}
        </div>
      </div>
    </a>
  );
}
