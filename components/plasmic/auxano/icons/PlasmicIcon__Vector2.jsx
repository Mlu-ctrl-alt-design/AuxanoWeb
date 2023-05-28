// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 19"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.562 18.292a9.179 9.179 0 01-4.007-.81 5.797 5.797 0 01-2.63-2.478 8.458 8.458 0 01-.918-4.19V0h3.854v10.43a5.537 5.537 0 00.903 3.473 4.038 4.038 0 005.643 0 5.506 5.506 0 00.903-3.442V0h3.838v10.813a8.626 8.626 0 01-.917 4.19 5.796 5.796 0 01-2.63 2.479 9.178 9.178 0 01-4.039.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
