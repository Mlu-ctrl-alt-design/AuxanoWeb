// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Shape2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 252 229"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M247.901 114.5c0 61.003-54.396 111-122.2 111S3.5 175.503 3.5 114.5s54.397-111 122.201-111 122.2 49.997 122.2 111z"
        }
        stroke={"currentColor"}
        strokeWidth={"7"}
      ></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */
