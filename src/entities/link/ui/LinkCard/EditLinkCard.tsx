"use client";

import React, { useState, useRef } from "react";

import type { Link } from "@/shared/config/types";
import { timeSinceFormat } from "@/shared/lib";
import { Row, PencilIcon, TrashBinIcon } from "@/shared/ui";
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
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { data: viewCount } = useViewCountQuery(link.id);
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState({
    title: link.title,
    description: link.description,
    image: link.image,
  });

  const handleOutsideClickRef = useOutsideClick<HTMLDivElement>(handleEdit);

  function handleEdit() {
    const hasChanged =
      newData.title !== link.title ||
      newData.description !== link.description ||
      newData.image !== link.image;
    if (isEdit) {
      setIsEdit(false);
      if (hasChanged) {
        onEdit({
          ...link,
          ...newData,
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
  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/link/image", {
        method: "POST",
        body: formData,
      });
      const { image } = await res.json();
      setNewData((prev) => ({ ...prev, image }));
    }
  };
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
      <div
        className={cx("img-wrapper")}
        onClick={() => isEdit && imageInputRef.current?.click()}
      >
        <img src={newData.image || ""} alt="link meta data image" />
        <input
          hidden
          type="file"
          ref={imageInputRef}
          onChange={handleChangeImage}
        />
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
