// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oGQcGtbFzYohLFbpGrRxL3
// Component: 6NjpMkUH8g-
import * as React from "react";
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
import TextInput from "../../TextInput"; // plasmic-import: Vimgk9fhCxL/component
import Button2 from "../../Button2"; // plasmic-import: puKm7ksVLVR/component
import { useScreenVariants as useScreenVariantsbmXrKiwboivdw } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmXrKIWBOIVDW/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_auxano.module.css"; // plasmic-import: oGQcGtbFzYohLFbpGrRxL3/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: 6NjpMkUH8g-/css

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

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

function PlasmicFooter__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbmXrKiwboivdw()
  });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"footer"}
      data-plasmic-override={overrides.footer}
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
        sty.footer
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"frame15"}
        data-plasmic-override={overrides.frame15}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame15)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          hasGap={true}
          className={classNames(projectcss.all, sty.logo)}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fLGdQ)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__c443Z)}
                displayHeight={"198px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"220px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/auxano/images/logoFinal2Xpng.png",
                  fullWidth: 280,
                  fullHeight: 125,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bxWy1
                )}
              >
                {hasVariant(globalVariants, "screen", "tabletOnly")
                  ? "We’ve mastered ABC's of business rescue, corporate restructure, and turnaround strategy; Let us help you."
                  : "We’ve mastered the ABC's of business rescue, corporate restructure, and turnaround strategy; Let us help you."}
              </div>
            </p.Stack>
          ) : null}
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame13"}
            data-plasmic-override={overrides.frame13}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame13)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eewQe
              )}
            >
              {hasVariant(globalVariants, "screen", "tabletOnly")
                ? "Subscribe to our newsletter"
                : "Subscribe to our newsletter"}
            </div>
            <p.Stack
              as={"div"}
              data-plasmic-name={"form"}
              data-plasmic-override={overrides.form}
              hasGap={true}
              className={classNames(projectcss.all, sty.form)}
            >
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, ["textInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                value={
                  p.generateStateValueProp($state, ["textInput", "value"]) ?? ""
                }
              />
            </p.Stack>
            <Button2
              data-plasmic-name={"button2"}
              data-plasmic-override={overrides.button2}
              className={classNames("__wab_instance", sty.button2)}
            >
              {"Sign up to newsletter"}
            </Button2>
          </p.Stack>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"frame12"}
          data-plasmic-override={overrides.frame12}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame12)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame6"}
            data-plasmic-override={overrides.frame6}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame6)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"widgwts"}
              data-plasmic-override={overrides.widgwts}
              hasGap={true}
              className={classNames(projectcss.all, sty.widgwts)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yccL)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame9"}
                    data-plasmic-override={overrides.frame9}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame9)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"widget2"}
                      data-plasmic-override={overrides.widget2}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.widget2)}
                    >
                      <div
                        data-plasmic-name={"helpMenu"}
                        data-plasmic-override={overrides.helpMenu}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.helpMenu
                        )}
                      >
                        {"Help"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks"}
                        data-plasmic-override={overrides.aboutFeaturesWorks}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks6"}
                        data-plasmic-override={overrides.aboutFeaturesWorks6}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks6
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks7"}
                        data-plasmic-override={overrides.aboutFeaturesWorks7}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks7
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks8"}
                        data-plasmic-override={overrides.aboutFeaturesWorks8}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks8
                        )}
                      >
                        {"Customer Support"}
                      </div>
                    </p.Stack>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame10"}
                    data-plasmic-override={overrides.frame10}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame10)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"widget1"}
                      data-plasmic-override={overrides.widget1}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.widget1)}
                    >
                      <div
                        data-plasmic-name={"helpMenu2"}
                        data-plasmic-override={overrides.helpMenu2}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.helpMenu2
                        )}
                      >
                        {"Company"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks2"}
                        data-plasmic-override={overrides.aboutFeaturesWorks2}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks2
                        )}
                      >
                        {"About          "}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks9"}
                        data-plasmic-override={overrides.aboutFeaturesWorks9}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks9
                        )}
                      >
                        {"About          "}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks10"}
                        data-plasmic-override={overrides.aboutFeaturesWorks10}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks10
                        )}
                      >
                        {"About          "}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks11"}
                        data-plasmic-override={overrides.aboutFeaturesWorks11}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks11
                        )}
                      >
                        {"About          "}
                      </div>
                    </p.Stack>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame16"}
                    data-plasmic-override={overrides.frame16}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame16)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"widget3"}
                      data-plasmic-override={overrides.widget3}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.widget3)}
                    >
                      <div
                        data-plasmic-name={"helpMenu3"}
                        data-plasmic-override={overrides.helpMenu3}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.helpMenu3
                        )}
                      >
                        {"Help"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks3"}
                        data-plasmic-override={overrides.aboutFeaturesWorks3}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks3
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks12"}
                        data-plasmic-override={overrides.aboutFeaturesWorks12}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks12
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks13"}
                        data-plasmic-override={overrides.aboutFeaturesWorks13}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks13
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks14"}
                        data-plasmic-override={overrides.aboutFeaturesWorks14}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks14
                        )}
                      >
                        {"Customer Support"}
                      </div>
                    </p.Stack>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame11"}
                    data-plasmic-override={overrides.frame11}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame11)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"widget4"}
                      data-plasmic-override={overrides.widget4}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.widget4)}
                    >
                      <div
                        data-plasmic-name={"helpMenu4"}
                        data-plasmic-override={overrides.helpMenu4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.helpMenu4
                        )}
                      >
                        {"Resources"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks4"}
                        data-plasmic-override={overrides.aboutFeaturesWorks4}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks4
                        )}
                      >
                        {"Free eBooks"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks15"}
                        data-plasmic-override={overrides.aboutFeaturesWorks15}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks15
                        )}
                      >
                        {"Free eBooks"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks16"}
                        data-plasmic-override={overrides.aboutFeaturesWorks16}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks16
                        )}
                      >
                        {"Free eBooks"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks17"}
                        data-plasmic-override={overrides.aboutFeaturesWorks17}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks17
                        )}
                      >
                        {"Free eBooks"}
                      </div>
                    </p.Stack>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"frame17"}
                    data-plasmic-override={overrides.frame17}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.frame17)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"widget5"}
                      data-plasmic-override={overrides.widget5}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.widget5)}
                    >
                      <div
                        data-plasmic-name={"helpMenu5"}
                        data-plasmic-override={overrides.helpMenu5}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.helpMenu5
                        )}
                      >
                        {"Help"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks5"}
                        data-plasmic-override={overrides.aboutFeaturesWorks5}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks5
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks18"}
                        data-plasmic-override={overrides.aboutFeaturesWorks18}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks18
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks19"}
                        data-plasmic-override={overrides.aboutFeaturesWorks19}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks19
                        )}
                      >
                        {"Customer Support"}
                      </div>
                      <div
                        data-plasmic-name={"aboutFeaturesWorks20"}
                        data-plasmic-override={overrides.aboutFeaturesWorks20}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.aboutFeaturesWorks20
                        )}
                      >
                        {"Customer Support"}
                      </div>
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              ) : null}
            </p.Stack>
          </p.Stack>
          <p.Stack
            as={"div"}
            data-plasmic-name={"frame18"}
            data-plasmic-override={overrides.frame18}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame18)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"bottomFooter"}
              data-plasmic-override={overrides.bottomFooter}
              hasGap={true}
              className={classNames(projectcss.all, sty.bottomFooter)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__cerVg)}>
                  <div
                    data-plasmic-name={"copyright"}
                    data-plasmic-override={overrides.copyright}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.copyright
                    )}
                  >
                    {"© Copyright 2022, All Rights Reserved by Auxano"}
                  </div>
                  <p.Stack
                    as={p.PlasmicImg}
                    hasGap={true}
                    alt={""}
                    className={classNames(sty.img__i5Mfx)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"168px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/auxano/images/frame11.svg",
                      fullWidth: 168,
                      fullHeight: 48,
                      aspectRatio: 3.5
                    }}
                  />
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  footer: [
    "footer",
    "frame15",
    "logo",
    "frame13",
    "form",
    "textInput",
    "button2",
    "frame12",
    "frame6",
    "widgwts",
    "frame9",
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8",
    "frame10",
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11",
    "frame16",
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14",
    "frame11",
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17",
    "frame17",
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20",
    "frame18",
    "bottomFooter",
    "copyright"
  ],

  frame15: [
    "frame15",
    "logo",
    "frame13",
    "form",
    "textInput",
    "button2",
    "frame12",
    "frame6",
    "widgwts",
    "frame9",
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8",
    "frame10",
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11",
    "frame16",
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14",
    "frame11",
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17",
    "frame17",
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20",
    "frame18",
    "bottomFooter",
    "copyright"
  ],

  logo: ["logo", "frame13", "form", "textInput", "button2"],
  frame13: ["frame13", "form", "textInput", "button2"],
  form: ["form", "textInput"],
  textInput: ["textInput"],
  button2: ["button2"],
  frame12: [
    "frame12",
    "frame6",
    "widgwts",
    "frame9",
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8",
    "frame10",
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11",
    "frame16",
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14",
    "frame11",
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17",
    "frame17",
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20",
    "frame18",
    "bottomFooter",
    "copyright"
  ],

  frame6: [
    "frame6",
    "widgwts",
    "frame9",
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8",
    "frame10",
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11",
    "frame16",
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14",
    "frame11",
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17",
    "frame17",
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20"
  ],

  widgwts: [
    "widgwts",
    "frame9",
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8",
    "frame10",
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11",
    "frame16",
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14",
    "frame11",
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17",
    "frame17",
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20"
  ],

  frame9: [
    "frame9",
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8"
  ],

  widget2: [
    "widget2",
    "helpMenu",
    "aboutFeaturesWorks",
    "aboutFeaturesWorks6",
    "aboutFeaturesWorks7",
    "aboutFeaturesWorks8"
  ],

  helpMenu: ["helpMenu"],
  aboutFeaturesWorks: ["aboutFeaturesWorks"],
  aboutFeaturesWorks6: ["aboutFeaturesWorks6"],
  aboutFeaturesWorks7: ["aboutFeaturesWorks7"],
  aboutFeaturesWorks8: ["aboutFeaturesWorks8"],
  frame10: [
    "frame10",
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11"
  ],

  widget1: [
    "widget1",
    "helpMenu2",
    "aboutFeaturesWorks2",
    "aboutFeaturesWorks9",
    "aboutFeaturesWorks10",
    "aboutFeaturesWorks11"
  ],

  helpMenu2: ["helpMenu2"],
  aboutFeaturesWorks2: ["aboutFeaturesWorks2"],
  aboutFeaturesWorks9: ["aboutFeaturesWorks9"],
  aboutFeaturesWorks10: ["aboutFeaturesWorks10"],
  aboutFeaturesWorks11: ["aboutFeaturesWorks11"],
  frame16: [
    "frame16",
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14"
  ],

  widget3: [
    "widget3",
    "helpMenu3",
    "aboutFeaturesWorks3",
    "aboutFeaturesWorks12",
    "aboutFeaturesWorks13",
    "aboutFeaturesWorks14"
  ],

  helpMenu3: ["helpMenu3"],
  aboutFeaturesWorks3: ["aboutFeaturesWorks3"],
  aboutFeaturesWorks12: ["aboutFeaturesWorks12"],
  aboutFeaturesWorks13: ["aboutFeaturesWorks13"],
  aboutFeaturesWorks14: ["aboutFeaturesWorks14"],
  frame11: [
    "frame11",
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17"
  ],

  widget4: [
    "widget4",
    "helpMenu4",
    "aboutFeaturesWorks4",
    "aboutFeaturesWorks15",
    "aboutFeaturesWorks16",
    "aboutFeaturesWorks17"
  ],

  helpMenu4: ["helpMenu4"],
  aboutFeaturesWorks4: ["aboutFeaturesWorks4"],
  aboutFeaturesWorks15: ["aboutFeaturesWorks15"],
  aboutFeaturesWorks16: ["aboutFeaturesWorks16"],
  aboutFeaturesWorks17: ["aboutFeaturesWorks17"],
  frame17: [
    "frame17",
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20"
  ],

  widget5: [
    "widget5",
    "helpMenu5",
    "aboutFeaturesWorks5",
    "aboutFeaturesWorks18",
    "aboutFeaturesWorks19",
    "aboutFeaturesWorks20"
  ],

  helpMenu5: ["helpMenu5"],
  aboutFeaturesWorks5: ["aboutFeaturesWorks5"],
  aboutFeaturesWorks18: ["aboutFeaturesWorks18"],
  aboutFeaturesWorks19: ["aboutFeaturesWorks19"],
  aboutFeaturesWorks20: ["aboutFeaturesWorks20"],
  frame18: ["frame18", "bottomFooter", "copyright"],
  bottomFooter: ["bottomFooter", "copyright"],
  copyright: ["copyright"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footer"),
  {
    // Helper components rendering sub-elements
    frame15: makeNodeComponent("frame15"),
    logo: makeNodeComponent("logo"),
    frame13: makeNodeComponent("frame13"),
    form: makeNodeComponent("form"),
    textInput: makeNodeComponent("textInput"),
    button2: makeNodeComponent("button2"),
    frame12: makeNodeComponent("frame12"),
    frame6: makeNodeComponent("frame6"),
    widgwts: makeNodeComponent("widgwts"),
    frame9: makeNodeComponent("frame9"),
    widget2: makeNodeComponent("widget2"),
    helpMenu: makeNodeComponent("helpMenu"),
    aboutFeaturesWorks: makeNodeComponent("aboutFeaturesWorks"),
    aboutFeaturesWorks6: makeNodeComponent("aboutFeaturesWorks6"),
    aboutFeaturesWorks7: makeNodeComponent("aboutFeaturesWorks7"),
    aboutFeaturesWorks8: makeNodeComponent("aboutFeaturesWorks8"),
    frame10: makeNodeComponent("frame10"),
    widget1: makeNodeComponent("widget1"),
    helpMenu2: makeNodeComponent("helpMenu2"),
    aboutFeaturesWorks2: makeNodeComponent("aboutFeaturesWorks2"),
    aboutFeaturesWorks9: makeNodeComponent("aboutFeaturesWorks9"),
    aboutFeaturesWorks10: makeNodeComponent("aboutFeaturesWorks10"),
    aboutFeaturesWorks11: makeNodeComponent("aboutFeaturesWorks11"),
    frame16: makeNodeComponent("frame16"),
    widget3: makeNodeComponent("widget3"),
    helpMenu3: makeNodeComponent("helpMenu3"),
    aboutFeaturesWorks3: makeNodeComponent("aboutFeaturesWorks3"),
    aboutFeaturesWorks12: makeNodeComponent("aboutFeaturesWorks12"),
    aboutFeaturesWorks13: makeNodeComponent("aboutFeaturesWorks13"),
    aboutFeaturesWorks14: makeNodeComponent("aboutFeaturesWorks14"),
    frame11: makeNodeComponent("frame11"),
    widget4: makeNodeComponent("widget4"),
    helpMenu4: makeNodeComponent("helpMenu4"),
    aboutFeaturesWorks4: makeNodeComponent("aboutFeaturesWorks4"),
    aboutFeaturesWorks15: makeNodeComponent("aboutFeaturesWorks15"),
    aboutFeaturesWorks16: makeNodeComponent("aboutFeaturesWorks16"),
    aboutFeaturesWorks17: makeNodeComponent("aboutFeaturesWorks17"),
    frame17: makeNodeComponent("frame17"),
    widget5: makeNodeComponent("widget5"),
    helpMenu5: makeNodeComponent("helpMenu5"),
    aboutFeaturesWorks5: makeNodeComponent("aboutFeaturesWorks5"),
    aboutFeaturesWorks18: makeNodeComponent("aboutFeaturesWorks18"),
    aboutFeaturesWorks19: makeNodeComponent("aboutFeaturesWorks19"),
    aboutFeaturesWorks20: makeNodeComponent("aboutFeaturesWorks20"),
    frame18: makeNodeComponent("frame18"),
    bottomFooter: makeNodeComponent("bottomFooter"),
    copyright: makeNodeComponent("copyright"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
