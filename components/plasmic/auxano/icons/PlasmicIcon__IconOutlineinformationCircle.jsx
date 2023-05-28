// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconOutlineinformationCircleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7 2.333a4.667 4.667 0 100 9.334 4.667 4.667 0 000-9.334zM1.167 7a5.833 5.833 0 1111.666 0A5.833 5.833 0 011.167 7zm5.25-2.333c0-.322.26-.584.583-.584h.006a.583.583 0 110 1.167H7a.583.583 0 01-.583-.583zM5.833 7c0-.322.261-.583.584-.583H7c.322 0 .583.26.583.583v1.75a.583.583 0 110 1.167H7a.583.583 0 01-.583-.584v-1.75A.583.583 0 015.833 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconOutlineinformationCircleIcon;
/* prettier-ignore-end */
