// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ShapeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 247 213"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".2"}
        d={
          "M242.964 106.268c0 56.289-53.101 102.769-119.732 102.769-66.63 0-119.732-46.48-119.732-102.769C3.5 49.98 56.602 3.5 123.232 3.5c66.631 0 119.732 46.48 119.732 102.768z"
        }
        stroke={"currentColor"}
        strokeWidth={"7"}
      ></path>
    </svg>
  );
}

export default ShapeIcon;
/* prettier-ignore-end */
