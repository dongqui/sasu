"use client";

import { Button } from "@/shared/ui";
import { useState } from "react";

import { deployLinksAction } from "@/features/admin/api/deployLinksAction";
import { useUpdateLinks } from "@/features/admin/models/useUpdateLinks";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function AdminHeader() {
  const [isLoading, setIsLoading] = useState(false);
  const { addedLinks, editedLinks, deletedLinks } = useUpdateLinks();
  const handleClickDeploy = async () => {
    try {
      setIsLoading(true);
      await deployLinksAction({
        addedLinks,
        editedLinks,
        deletedLinks,
      });
      alert("성공!");
    } catch (e) {
      alert(e);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className={cx("header")}>
      <h1>당신의 노동을 응원합니다.</h1>
      <Button disabled={isLoading} onClick={handleClickDeploy}>
        배포하기
      </Button>
    </header>
  );
}
