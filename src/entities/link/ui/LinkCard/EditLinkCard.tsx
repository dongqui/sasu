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

interface Props {
  link: Link;
  onEdit: (link: Link) => void;
  onDelete: (id: number) => void;
}

export function EditLinkCard({ link, onDelete, onEdit }: Props) {
  const { data: viewCount } = useViewCountQuery(link.id);
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState({
    title: link.title,
    description: link.description,
  });

  const handleOutsideClickRef = useOutsideClick<HTMLDivElement>(handleEdit);

  function handleEdit() {
    const hasChanged =
      newData.title !== link.title || newData.description !== link.description;
    if (isEdit) {
      setIsEdit(false);
      if (hasChanged) {
        onEdit({
          ...link,
          title: newData.title,
          description: newData.description,
        });
      }
    }
  }
  const handleClickEdit = () => setIsEdit((prev) => !prev);
  const handleClickDelete = () => {
    if (window.confirm("삭제 ㄱㄱ?")) {
      onDelete(link.id);
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewData((prev) => ({ ...prev, title: e.target.value }));
  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNewData((prev) => ({ ...prev, description: e.target.value }));

  const handlePressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };
  return (
    <div
      className={cx("container")}
      ref={handleOutsideClickRef}
      onKeyUp={handlePressEnter}
    >
      <div className={cx("img-wrapper")}>
        <ImageWithFallback src={link.image} alt="link meta data image" />
      </div>
      <div className={cx("content")}>
        {isEdit ? (
          <textarea
            className={cx("description")}
            value={newData.description}
            rows={2}
            onChange={handleChangeDescription}
          />
        ) : (
          <h2 className={cx("description")}>{newData.description}</h2>
        )}

        {isEdit ? (
          <input
            className={cx("title")}
            value={newData.title}
            onChange={handleChangeTitle}
          />
        ) : (
          <div className={cx("title")}>{newData.title}</div>
        )}

        <div className={cx("info")}>
          <Row justifyContent="space-between">
            {viewCount?.count ?? "-"}명이 구경함 -{" "}
            {timeSinceFormat(link.created_at)}
            <Row gap={10}>
              {!isEdit && (
                <button onClick={handleClickEdit}>
                  <PencilIcon />
                </button>
              )}
              <button onClick={handleClickDelete}>
                <TrashBinIcon />
              </button>
            </Row>
          </Row>
        </div>
      </div>
    </div>
  );
}
