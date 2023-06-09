// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: Ba2YaKrrpo
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicNavBarFinal.module.css"; // plasmic-import: Ba2YaKrrpo/css

export const PlasmicNavBarFinal__VariantProps = new Array();

export const PlasmicNavBarFinal__ArgProps = new Array();

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

function PlasmicNavBarFinal__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbmXrKiwboivdw()
  });
  return (
    <NavigationBar
      data-plasmic-name={"navBar"}
      data-plasmic-override={overrides.navBar}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__izlHl)}
          component={Link}
          href={"#"}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__nyGwu)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? "40px"
                : hasVariant(globalVariants, "screen", "tabletOnly")
                ? "40px"
                : "80px"
            }
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={{
              src: "/plasmic/auxano/images/logoFinal2Xpng.png",
              fullWidth: 280,
              fullHeight: 125,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
      }
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.navBar
      )}
      closeButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__v1ND)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          src={"https://static1.plasmic.app/close.svg"}
        />
      }
      itemsGap={8}
      menuItems={
        true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__gHfGj
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
              target={undefined}
            >
              {"Home"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__jYus5
              )}
              component={Link}
              href={`/about`}
              platform={"nextjs"}
            >
              {"About"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__uLev
              )}
              component={Link}
              href={`/appointments`}
              platform={"nextjs"}
            >
              {"Appointments"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__lYrGj
              )}
              component={Link}
              href={`/services`}
              platform={"nextjs"}
              target={undefined}
            >
              {"Services"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link___6IxZd
              )}
              component={Link}
              href={`/contact`}
              platform={"nextjs"}
            >
              {"Contact"}
            </p.PlasmicLink>
          </p.Stack>
        ) : null
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__xZqvT)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "32px"
              : hasVariant(globalVariants, "screen", "tabletOnly")
              ? "32px"
              : "auto"
          }
          src={"https://static1.plasmic.app/menu.svg"}
        />
      }
      responsiveBreakpoint={768}
    />
  );
}

const PlasmicDescendants = {
  navBar: ["navBar", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBarFinal__ArgProps,
          internalVariantPropNames: PlasmicNavBarFinal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBarFinal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navBar") {
    func.displayName = "PlasmicNavBarFinal";
  } else {
    func.displayName = `PlasmicNavBarFinal.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBarFinal = Object.assign(
  // Top-level PlasmicNavBarFinal renders the root element
  makeNodeComponent("navBar"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicNavBarFinal
    internalVariantProps: PlasmicNavBarFinal__VariantProps,
    internalArgProps: PlasmicNavBarFinal__ArgProps
  }
);

export default PlasmicNavBarFinal;
/* prettier-ignore-end */
