'use clinet'

import { InputHTMLAttributes } from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'hidden'> {
  hidden?: boolean;
}

export function Input({ hidden, ...rest }: Props) {
  return (
    <div className={cx('container', { hidden })}>
      <input {...rest}/>
    </div>
  )
}