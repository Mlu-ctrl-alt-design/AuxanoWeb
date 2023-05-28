// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 19"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.477 18.54a10.228 10.228 0 01-3.212-.505 7.203 7.203 0 01-2.707-1.53 7.846 7.846 0 01-1.881-2.844 11.746 11.746 0 01-.673-4.222v-.504a10.997 10.997 0 01.673-4.069A7.387 7.387 0 015.265.507a10.522 10.522 0 016.408-.015 7.387 7.387 0 014.589 4.359c.478 1.302.707 2.682.672 4.068v.505a11.743 11.743 0 01-.672 4.221 7.846 7.846 0 01-1.882 2.845 7.202 7.202 0 01-2.707 1.53 10.27 10.27 0 01-3.196.52zm0-3.243a4.588 4.588 0 002.217-.55 4.007 4.007 0 001.637-1.851 8.26 8.26 0 00.627-3.533v-.505a7.557 7.557 0 00-.627-3.35 4.083 4.083 0 00-1.637-1.789 4.588 4.588 0 00-2.217-.55 4.496 4.496 0 00-2.172.55 4.053 4.053 0 00-1.667 1.79 7.555 7.555 0 00-.627 3.35v.504a8.259 8.259 0 00.627 3.533c.343.78.927 1.428 1.667 1.85a4.495 4.495 0 002.172.551z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
