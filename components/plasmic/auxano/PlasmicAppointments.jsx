// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: cvPYn_MPiK
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBarFinal from "../../NavBarFinal"; // plasmic-import: Ba2YaKrrpo/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import Footer from "../../Footer"; // plasmic-import: 6NjpMkUH8g-/component
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicAppointments.module.css"; // plasmic-import: cvPYn_MPiK/css

export const PlasmicAppointments__VariantProps = new Array();

export const PlasmicAppointments__ArgProps = new Array();

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

function PlasmicAppointments__RenderFunc(props) {
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
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
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
          <NavBarFinal
            data-plasmic-name={"navBarFinal"}
            data-plasmic-override={overrides.navBarFinal}
            className={classNames("__wab_instance", sty.navBarFinal)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__sAtpg)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qSmE5
                )}
              >
                {"Appointments"}
              </div>
              <CmsQueryRepeater
                data-plasmic-name={"appointments"}
                data-plasmic-override={overrides.appointments}
                className={classNames("__wab_instance", sty.appointments)}
                desc={false}
                emptyMessage={
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zkrbs
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
                          sty.text__cgiv1
                        )}
                      >
                        {"Loading..."}
                      </div>
                    )}
                  </ph.DataCtxReader>
                }
                noAutoRepeat={false}
                noLayout={false}
                useDraft={false}
              >
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__oz1Lu)}
                    >
                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__tvCtl
                        )}
                        field={"logo"}
                      />

                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__xsuY
                        )}
                        field={"name"}
                      />

                      <CmsRowField
                        className={classNames(
                          "__wab_instance",
                          sty.cmsEntryField__zcZvb
                        )}
                        field={"description"}
                      />
                    </div>
                  )}
                </ph.DataCtxReader>
              </CmsQueryRepeater>
            </div>
          ) : null}
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navBarFinal", "appointments", "footer"],
  navBarFinal: ["navBarFinal"],
  appointments: ["appointments"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAppointments__ArgProps,
          internalVariantPropNames: PlasmicAppointments__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppointments__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAppointments";
  } else {
    func.displayName = `PlasmicAppointments.${nodeName}`;
  }
  return func;
}

export const PlasmicAppointments = Object.assign(
  // Top-level PlasmicAppointments renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarFinal: makeNodeComponent("navBarFinal"),
    appointments: makeNodeComponent("appointments"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicAppointments
    internalVariantProps: PlasmicAppointments__VariantProps,
    internalArgProps: PlasmicAppointments__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAppointments;
/* prettier-ignore-end */
