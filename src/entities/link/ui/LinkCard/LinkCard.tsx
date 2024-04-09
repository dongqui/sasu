"use client";

import Image from "next/image";

import type { Link } from "@/shared/config/types";
import { timeSinceFormat } from "@/shared/lib";
import { useViewCountMutation, useViewCountQuery } from "../../models";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props extends Link {
  priority: boolean;
}

export function LinkCard({
  id,
  title,
  description,
  image,
  created_at,
  url,
  priority,
}: Props) {
  const { mutate } = useViewCountMutation();
  const { data: viewCount } = useViewCountQuery(id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
    mutate(id);
  };

  return (
    <a className={cx("container")} onClick={handleClick} href="#">
      <div className={cx("img-wrapper")}>
        <Image
          src={image || ""}
          alt="link meta data image"
          fill
          priority={priority}
          sizes="(max-width: 985px) 300w, 400w"
        />
      </div>
      <div className={cx("content")}>
        <h2 className={cx("description")}>{description}</h2>
        <div className={cx("title")}>{title}</div>
        <div className={cx("info")}>
          {viewCount?.count ?? "-"}명이 구경함 - {timeSinceFormat(created_at)}
        </div>
      </div>
    </a>
  );
}
