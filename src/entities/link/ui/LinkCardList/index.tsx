"use client";

import type { Link } from "@/shared/config/types";
import { LinkCard } from "../LinkCard";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function LinkCardList() {
  return (
    <ul className={cx("container")}>
      {[
        {
          id: "1",
          created_at: String(new Date().getTime()),
          url: "naver.com",
          description:
            "800명 이상의 디자이너가 모여있는 스터디 및 사이드 프로젝트를 진행하는 커뮤니티",
          title: "디스탓 커뮤니티",
          image: null,
        },
        {
          id: "1",
          created_at: String(new Date().getTime()),
          url: "naver.com",
          description:
            "매일 맞춤 칼럼을 공유하는 성장하는 사람들의 커리어 플랫폼",
          title: "서핏",
          image:
            "https://search.pstatic.net/common?type=f&size=518x522&quality=95&direct=true&src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200713_269%2F1594566623057rtGFr_JPEG%2F316611593501612932.jpg",
        },
        {
          id: "1",
          created_at: String(new Date().getTime()),
          url: "naver.com",
          description: "해외 앱화면을 모아 볼수 있는 사이트",
          title: "Mobbin",
          image:
            "https://s3-alpha-sig.figma.com/img/0a55/39db/119908d207aa416625547736de143adf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B06RMqGBhF9VDKmfXCrXsCeCw5RsHPJmJuS79Hx~0tlTKfcCJ6uQOEsd1jHiO2kYfFh0uwFRUNpDX2o8~nr2tsblYzMYayiSMIwqYpn45TR~iE-F8OtSMwaaFU5TgHJlqF~0jBjm8fAOM1omUAwDaAI6F8MDvM-Jx2fhkKPoU13UOdmyz09gTjT-a5aBnyQiC3r0q2E-jKqpiySAfjyCBiYkA9piATvLei0eTRdAf6-90kP5CBkbj76V8PZh3rwMThzgebq52uy1d2Uy77pkOO48kUYhZLKAMvu3Gldi43bsjB2vGe10mFA3RgJG3KkGs8CDrg1a20eu3DF0mn9Ahg__",
        },
        {
          id: "1",
          created_at: String(new Date().getTime()),
          url: "naver.com",
          description: "무료로 고퀄리티 이미지를 얻을 수 있는 해외 사이트",
          title: "Unsplash",
          image:
            "https://s3-alpha-sig.figma.com/img/2074/8f26/d511c47601a734a1b1e8ddb501cb2352?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKJVA5jU5J1RiKYj3Hu1oshE6xQjnMttGMI9l6IG5KFUevS3R6YffTkdMZzot3oKLpqlk7sw5lxpPHSpf7lkZA1CmSpit9Rx52Xzag6M8wP4KpJuwf~O1PTK~V1GX9jLg5hgYPoH5BP3RXca9hYXpb4UHD2wSjhv600YetrQF8S3lquZY~1LfYU-dxpNa2OJk9U2vAr3BJdQ4dMQ3dHN1l8DVl~nyr8XnBcGwzTBSfwB6F3AGoJqA4~td7Ifcw5vI0UZ5beb-Rd31LjkC3FD1PcvwgNUSprZ2xTWLuvgW8XqmXUNw9~hZtPJ7aivV88HTHyryGLGLK8RJmiA3AaH3w__",
        },
      ].map((v, i) => (
        <li key={i}>
          <LinkCard {...v} />
        </li>
      ))}
    </ul>
  );
}
