import { Stack } from "@/shared/ui";
import { 안내_URL, 제보하기_URL, 의견보내기_URL } from "@/shared/constants";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Footer() {
  return (
    <footer className={cx("footer")}>
      <div>필요한게 있으시면 문의주세요.</div>
      <Stack gap={10}>
        <a href={제보하기_URL} target="_blank" rel="noopener noreferrer">
          제보하기
        </a>
        <a href={안내_URL} target="_blank" rel="noopener noreferrer">
          서비스 소개
        </a>
        <a href={의견보내기_URL} target="_blank" rel="noopener noreferrer">
          의견 보내기
        </a>
      </Stack>
    </footer>
  );
}
