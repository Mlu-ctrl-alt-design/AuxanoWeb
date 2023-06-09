// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: F3vIIsFda1
import * as React from "react";
import Head from "next/head";
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
import NavBarFinal from "../../NavBarFinal"; // plasmic-import: Ba2YaKrrpo/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import Button2 from "../../Button2"; // plasmic-import: puKm7ksVLVR/component
import Footer from "../../Footer"; // plasmic-import: 6NjpMkUH8g-/component
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: F3vIIsFda1/css

export const PlasmicServices__VariantProps = new Array();

export const PlasmicServices__ArgProps = new Array();

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

function PlasmicServices__RenderFunc(props) {
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"services"}
          data-plasmic-override={overrides.services}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.services
          )}
        >
          <NavBarFinal
            data-plasmic-name={"navBarFinal"}
            data-plasmic-override={overrides.navBarFinal}
            className={classNames("__wab_instance", sty.navBarFinal)}
          />

          <div
            data-plasmic-name={"frame26"}
            data-plasmic-override={overrides.frame26}
            className={classNames(projectcss.all, sty.frame26)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              hasGap={true}
              className={classNames(projectcss.all, sty.header)}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"content"}
                data-plasmic-override={overrides.content}
                hasGap={true}
                className={classNames(projectcss.all, sty.content)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame39"}
                  data-plasmic-override={overrides.frame39}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame39)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__klvHm
                    )}
                  >
                    {"About us."}
                  </div>
                </p.Stack>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mxoF
                  )}
                >
                  {hasVariant(globalVariants, "screen", "tabletOnly")
                    ? "Unlocking Business Potential with Tailored Solutions and the ABC's of Business Rescue"
                    : "Unlocking Business Potential with \nTailored Solutions and the ABC's of Business Rescue"}
                </div>
              </p.Stack>
            </p.Stack>
          </div>
          <p.Stack
            as={"div"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"frame27"}
              data-plasmic-override={overrides.frame27}
              hasGap={true}
              className={classNames(projectcss.all, sty.frame27)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dUtOo
                )}
              >
                {"Our Services"}
              </div>
            </p.Stack>
            <CmsQueryRepeater
              data-plasmic-name={"cmsDataFetcher"}
              data-plasmic-override={overrides.cmsDataFetcher}
              className={classNames("__wab_instance", sty.cmsDataFetcher)}
              desc={false}
              emptyMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__b8BBa
                      )}
                    >
                      {"No matching published entries found."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              forceEmptyState={false}
              forceLoadingState={false}
              limit={0}
              loadingMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7K197
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              noAutoRepeat={false}
              noLayout={false}
              table={"services"}
              useDraft={false}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__fgbaY)}
                  >
                    {true ? (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xSHv
                        )}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__kOaXb
                            )}
                          >
                            {true ? (
                              <p.Stack
                                as={"div"}
                                hasGap={true}
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__lXrYd
                                )}
                              >
                                <CmsRowField
                                  className={classNames(
                                    "__wab_instance",
                                    sty.cmsEntryField__cJxbW
                                  )}
                                />
                              </p.Stack>
                            ) : null}
                            <CmsRowField
                              className={classNames(
                                "__wab_instance",
                                sty.cmsEntryField___20Ror
                              )}
                              field={"serviceDesc"}
                            />

                            <Button2
                              data-plasmic-name={"button2"}
                              data-plasmic-override={overrides.button2}
                              className={classNames(
                                "__wab_instance",
                                sty.button2
                              )}
                              link={`/contact`}
                            >
                              {"Get in touch"}
                            </Button2>
                          </p.Stack>
                        ) : null}
                        {(
                          hasVariant(globalVariants, "screen", "tabletOnly")
                            ? true
                            : true
                        ) ? (
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField__fLg41
                            )}
                            field={"serviceRelatedImage"}
                          />
                        ) : null}
                      </p.Stack>
                    ) : null}
                  </div>
                )}
              </ph.DataCtxReader>
            </CmsQueryRepeater>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__cEacE)}>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  services: [
    "services",
    "navBarFinal",
    "frame26",
    "header",
    "content",
    "frame39",
    "section",
    "frame27",
    "cmsDataFetcher",
    "button2",
    "footer"
  ],

  navBarFinal: ["navBarFinal"],
  frame26: ["frame26", "header", "content", "frame39"],
  header: ["header", "content", "frame39"],
  content: ["content", "frame39"],
  frame39: ["frame39"],
  section: ["section", "frame27", "cmsDataFetcher", "button2"],
  frame27: ["frame27"],
  cmsDataFetcher: ["cmsDataFetcher", "button2"],
  button2: ["button2"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "services") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("services"),
  {
    // Helper components rendering sub-elements
    navBarFinal: makeNodeComponent("navBarFinal"),
    frame26: makeNodeComponent("frame26"),
    header: makeNodeComponent("header"),
    content: makeNodeComponent("content"),
    frame39: makeNodeComponent("frame39"),
    section: makeNodeComponent("section"),
    frame27: makeNodeComponent("frame27"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    button2: makeNodeComponent("button2"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
