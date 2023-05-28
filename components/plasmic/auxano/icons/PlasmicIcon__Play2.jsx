// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Play2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 58"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#C-VNpe1O3va)"}>
        <path
          d={"M0 0h58v58H0V0z"}
          fill={"currentColor"}
          fillOpacity={".09"}
        ></path>

        <path
          d={
            "M24.439 24.19v10.637c0 1.571 1.727 2.529 3.06 1.696l8.51-5.318a2 2 0 000-3.392l-8.51-5.319c-1.332-.832-3.06.125-3.06 1.696z"
          }
          stroke={"currentColor"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path
          d={"M1 1h56v56H1V1z"}
          stroke={"currentColor"}
          strokeWidth={"2"}
        ></path>
      </g>

      <defs>
        <filter
          id={"C-VNpe1O3va"}
          x={"-26"}
          y={"-26"}
          width={"110"}
          height={"110"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feGaussianBlur
            in={"BackgroundImageFix"}
            stdDeviation={"13"}
          ></feGaussianBlur>

          <feComposite
            in2={"SourceAlpha"}
            operator={"in"}
            result={"effect1_backgroundBlur_184_460"}
          ></feComposite>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_backgroundBlur_184_460"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Play2Icon;
/* prettier-ignore-end */
