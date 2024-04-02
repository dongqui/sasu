import { Row, Button } from "@/shared/ui";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function AdminHeader() {
  return (
    <header className={cx("header")}>
      <h1>당신의 노동을 응원합니다.</h1>
      <Button>배포하기</Button>
    </header>
  );
}
