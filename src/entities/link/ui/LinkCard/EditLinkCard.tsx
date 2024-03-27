"use client";

import { useState } from "react";

import type { Link } from "@/shared/config/types";
import { timeSinceFormat } from "@/shared/lib";
import { ImageWithFallback, Row, PencilIcon, TrashBinIcon } from "@/shared/ui";
import { useOutsideClick } from "@/shared/hooks";
import { useViewCountQuery } from "../../models";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props extends Link {}

export function EditLinkCard({
  id,
  title,
  description,
  image,
  created_at,
  url,
}: Props) {
  const { data: viewCount } = useViewCountQuery(id);
  const [isEdit, setIsEdit] = useState(false);
  const wrapperRef = useOutsideClick<HTMLDivElement>(() => {
    setIsEdit(false);
  });

  const handleClickEdit = () => setIsEdit((prev) => !prev);

  return (
    <div className={cx("container")} ref={wrapperRef}>
      <div className={cx("img-wrapper")}>
        <ImageWithFallback src={image} alt="link meta data image" />
      </div>
      <div className={cx("content")}>
        {isEdit ? (
          <textarea
            className={cx("description")}
            value={description}
            rows={2}
          />
        ) : (
          <h2 className={cx("description")}>{title}</h2>
        )}

        {isEdit ? (
          <input className={cx("title")} value={title} />
        ) : (
          <div className={cx("title")}>{title}</div>
        )}

        <div className={cx("info")}>
          <Row justifyContent="space-between">
            {viewCount?.count ?? "-"}명이 구경함 - {timeSinceFormat(created_at)}
            <Row gap={10}>
              {!isEdit && (
                <button onClick={handleClickEdit}>
                  <PencilIcon />
                </button>
              )}
              <button>
                <TrashBinIcon />
              </button>
            </Row>
          </Row>
        </div>
      </div>
    </div>
  );
}
