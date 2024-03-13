import { Stack, Button } from "@/shared/ui";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Footer() {
  return (
    <footer className={cx("footer")}>
      <div>필요한게 있으시면 문의주세요.</div>
      <Stack gap={10}>
        <a>제보하기</a>
        <a>서비스 소개</a>
        <a>의견 보내기</a>
      </Stack>
    </footer>
  );
}
