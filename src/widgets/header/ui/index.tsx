"use client";

import { Row, Button } from "@/shared/ui";
import { 안내_URL, 제보하기_URL } from "@/shared/constants";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Header() {
  const handleClickInfo = () =>
    window.open(안내_URL, "_blank", "noopener,noreferrer");

  const handleClickReport = () =>
    window.open(제보하기_URL, "_blank", "noopener,noreferrer");

  return (
    <header className={cx("header")}>
      <h1>당신의 시작을 응원합니다.</h1>
      <Row gap={16}>
        <Button color="second" onClick={handleClickInfo}>
          안내
        </Button>
        <Button onClick={handleClickReport}>제보하기</Button>
      </Row>
    </header>
  );
}
