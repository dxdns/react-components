import { IconType } from "react-icons";
import styles from "./styles.module.css";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  Icon?: IconType;
};

export default React.forwardRef<HTMLInputElement, Props>(
  ({ label, Icon, ...rest }, ref) => {
    return (
      <div className={`${styles.switch} ${rest.className || ""}`}>
        <div className={styles.wrapper}>
          <input ref={ref} {...rest} type="checkbox" />
          {Icon && <Icon className={styles.icon} />}
        </div>
        <label>{label}</label>
      </div>
    );
  }
);
