// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: YhPmwoX5SH
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicTestimonial.module.css"; // plasmic-import: YhPmwoX5SH/css

export const PlasmicTestimonial__VariantProps = new Array();

export const PlasmicTestimonial__ArgProps = new Array("title", "content");

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTestimonial__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <h4
        data-plasmic-name={"title"}
        data-plasmic-override={overrides.title}
        className={classNames(
          projectcss.all,
          projectcss.h4,
          projectcss.__wab_text,
          sty.title
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.title;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Enter some text";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </h4>
      <p
        data-plasmic-name={"p"}
        data-plasmic-override={overrides.p}
        className={classNames(
          projectcss.all,
          projectcss.p,
          projectcss.__wab_text,
          sty.p
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.content;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </p>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "title", "p"],
  title: ["title"],
  p: ["p"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTestimonial__ArgProps,
          internalVariantPropNames: PlasmicTestimonial__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    title: makeNodeComponent("title"),
    p: makeNodeComponent("p"),
    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */
