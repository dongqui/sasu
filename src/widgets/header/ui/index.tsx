import { Row, Button } from "@/shared/ui";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Header() {
  return (
    <header className={cx("header")}>
      <h1>당신의 시작을 응원합니다.</h1>
      <Row gap={16}>
        <Button color="second">안내</Button>
        <Button>제보하기</Button>
      </Row>
    </header>
  );
}
