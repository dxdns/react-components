import { IconType } from "react-icons";
import style from "./style.module.css";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  Icon?: IconType;
};

export default React.forwardRef<HTMLInputElement, Props>(
  ({ label, Icon, ...rest }, ref) => {
    return (
      <div className={`${style.switch} ${rest.className || ""}`}>
        <div className={style.wrapper}>
          <input ref={ref} {...rest} type="checkbox" />
          {Icon && <Icon className={style.icon} />}
        </div>
        <label>{label}</label>
      </div>
    );
  }
);
