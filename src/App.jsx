import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

//#region Main Site Pages
import LayoutV2 from "./LayoutV2";
import Index from "./Pages/Index";
//#endregion

//#region NavBar - Pages
import About from "./Pages/About";
import Test from "./Pages/Test";
//#endregion

//#region NavBar - Tutorials Javascript
import JavaScriptTuto from "../Tutorials/JavaScript/ReadMe.mdx";
import JavaScriptIntro from "../Tutorials/JavaScript/JavaScript_1Intro.mdx";
import JavaScriptFunctions from "../Tutorials/JavaScript/JavaScript_2Functions.mdx";
import JavaScriptMakingDecisions from "../Tutorials/JavaScript/JavaScript_3MakingDecisions.mdx";
import JavaScriptArraysAndLoops from "../Tutorials/JavaScript/JavaScript_4ArraysAndLoops.mdx";
import JavaScriptAdvancedConcepts from "../Tutorials/JavaScript/JavaScript_5AdvancedConcepts.mdx";
import JavaScriptJSON from "../Tutorials/JavaScript/JavaScript_6JSON.mdx";
import JavaScriptObjects from "../Tutorials/JavaScript/JavaScript_7Objects.mdx";
import JavaScriptAsyncAndPromises from "../Tutorials/JavaScript/JavaScript_8AsyncAndPromises.mdx";
//#endregion

//#region NavBar - Tutorials NodeJS
import NodeJStTuto from "../Tutorials/NodeJS/ReadMe.mdx";
import NodeJS_1InitializationAndScripts from "../Tutorials/NodeJS/NodeJS_1InitializationAndScripts.mdx";
import NodeJS_2ConfigurePackageJSON from "../Tutorials/NodeJS/NodeJS_2ConfigurePackageJSON.mdx";
import NodeJS_3InstallPackages from "../Tutorials/NodeJS/NodeJS_3InstallPackages.mdx";
import NodeJS_4InstallJestPackage from "../Tutorials/NodeJS/NodeJS_4InstallJestPackage.mdx";
import NodeJS_5ManageDependencies from "../Tutorials/NodeJS/NodeJS_5ManageDependencies.mdx";
import NodeJS_6Debug_NodeJS from "../Tutorials/NodeJS/NodeJS_6Debug_NodeJS.mdx";
import NodeJS_7NodeJS_Files_Directories from "../Tutorials/NodeJS/NodeJS_7NodeJS_Files_Directories.mdx";
import NodeJS_8WebAPI_With_NodeJS from "../Tutorials/NodeJS/NodeJS_8WebAPI_With_NodeJS.mdx";
import NodeJS_9RouteManagement from "../Tutorials/NodeJS/NodeJS_9RouteManagement.mdx";
import NodeJS_ManageNodesVersions from "../Tutorials/NodeJS/NodeJS_ManageNodesVersions.mdx";
//#endregion

//#region NavBar - Tutorials TypeScript
import TypeScript_Tuto from "../Tutorials/TypeScript/ReadMe.mdx";
import TypeScript_1VariablesAndTypes from "../Tutorials/TypeScript/TypeScript_1VariablesAndTypes.mdx";
import TypeScript_2Interfaces from "../Tutorials/TypeScript/TypeScript_2Interfaces.mdx";
import TypeScript_3Functions from "../Tutorials/TypeScript/TypeScript_3Functions.mdx";
import TypeScript_4Classes from "../Tutorials/TypeScript/TypeScript_4Classes.mdx";
import TypeScript_5Generics from "../Tutorials/TypeScript/TypeScript_5Generics.mdx";
import TypeScript_6WorkingWithModules from "../Tutorials/TypeScript/TypeScript_6WorkingWithModules.mdx";
import TypeScript_7ExternalLibraries from "../Tutorials/TypeScript/TypeScript_7ExternalLibraries.mdx";
import TypeScript_8Namespaces from "../Tutorials/TypeScript/TypeScript_8Namespaces.mdx";
//#endregion

//#region NavBar - Tutorials React
import React_Tuto from "../Tutorials/React/ReadMe.mdx";
import React_1Intro from "../Tutorials/React/React_1Intro.mdx";
import React_2DataAndProperties from "../Tutorials/React/React_2DataAndProperties.mdx";
import React_3StateAndEvents from "../Tutorials/React/React_3StateAndEvents.mdx";
import React_4GetRouteParameters from "../Tutorials/React/React_4GetRouteParameters.mdx";
import React_5CreateAReactTypeScriptApp from "../Tutorials/React/React_5CreateAReactTypeScriptApp.mdx";
//#endregion

//#region NavBar - Tutorials Markdown
import Markdown_TOC from "../Tutorials/MarkDown/ReadMe.mdx";
import Markdown_Tuto from "../Tutorials/MarkDown/MarkDown.mdx";
import Markdown_MDX from "../Tutorials/MarkDown/MDX.mdx";
//#endregion

//#region NavBar - Generics VSCode
import VSCode_TOC from "../Tutorials/VS_CODE/Readme.mdx";
import VSCode_1InitializationAndScripts from "../Tutorials/VS_CODE/VSCode_1InitializationAndScripts.mdx";
import VSCode_ConfigureShortcuts from "../Tutorials/VS_CODE/VSCode_ConfigureShortcuts.mdx";
import VSCode_ConfigureSnippets from "../Tutorials/VS_CODE/VSCode_ConfigureSnippets.mdx";
import VSCode_NpmUninstallPackage from "../Tutorials/VS_CODE/VSCode_NpmUninstallPackage.mdx";
import VSCode_NpmInstallTypeScript from "../Tutorials/VS_CODE/VSCode_NpmInstallTypeScript.mdx";
import VSCode_NpmMarkdownIt from "../Tutorials/VS_CODE/VSCode_NpmMarkdownIt.mdx";
import VSCode_GitHubAddSourceControl from "../Tutorials/VS_CODE/VSCode_GitHubAddSourceControl.mdx";
//#endregion

//#region NavBar - Generics Errors
import Errors_TOC from "../Tutorials/FacedErrors/Readme.mdx";
//#endregion

//#region SideBar - React Works (React Dev - React Router)
import ReactDevApp from "../Works/React-Dev/src/ReactDevApp";
import ReactRouterApp from "../Works/React-Router/src/ReactRouterApp";
//#endregion

//#region SideBar - Web Dev Simplified - Apps
import BudgetApp from "../Works/WebDevSimplified/Vite_React_BudgetApp/src/BudgetApp";
import ReactQueryApp from "../Works/WebDevSimplified/Vite_React_ReactQuery_TanStackQuary/src/ReactQueryApp";
//#endregion

//#region SideBar - Web Dev Simplified - React Hooks Examples
import Home from "../Works/WebDevSimplified/Vite_React_Hooks/src/Home";
import UseStatePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseStatePage";
import UseEffectPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseEffectPage";
import UseContextPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseContextPage";
import UseRefPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseRefPage";
import UseMemoPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseMemoPage";
import UseCallbackPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseCallbackPage";
import UseReducerPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseReducerPage";
import UseTransitionPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseTransitionPage";
import UseDeferredValuePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseDeferredValuePage";
import UseLayoutEffectPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseLayoutEffectPage";
import UseLayoutEffect_UseEff from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseLayoutEffect_UseEff";
import UseLayoutEffect_UseLayoutEff from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseLayoutEffect_UseLayoutEff";
import UseDebugValuePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseDebugValuePage";
import UseCustomHooksPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseCustomHooksPage";
import UseImperativeHandlePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseImperativeHandlePage";
import UseIdPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UseIdPage";
import UseTogglePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/1-useToggle/UseTogglePage";
import UseTimeoutPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/2-useTimeout/UseTimeoutPage";
import UseDebouncePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/3-useDebounce/useDebouncePage";
import UseUpdateEffectPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/4-useUpdateEffect/UseUpdateEffectPage";
import UseArrayPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/5-useArray/UseArrayPage";
import UsePreviousPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/6-usePrevious/UsePreviousPage";
import UseStateWithHistoryPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/7-useStateWithHistory/UseStateWithHistoryPage";
import UseStoragePage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/8-useStorage/useStoragePage";
import UseAsyncPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/9-useAsync/UseAsyncPage";
import UseFetchPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/10-useFetch/UseFetchPage";
import UseScriptPage from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/11-useScript/UseScriptPage";
import DeepCompareEffectComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/12-useDeepCompareEffect/DeepCompareEffectComponent";
import EventListenerComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/13-useEventListener/EventListenerComponent";
import OnScreenComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/14-useOnScreen/OnScreenComponent";
import WindowSizeComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/15-useWindowSize/WindowSizeComponent";
import MediaQueryComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/16-useMediaQuery/MediaQueryComponent";
import GeolocationComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/17-useGeolocation/GeolocationComponent";
import StateWithValidationComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/18-useStateWithValidation/StateWithValidationComponent";
import SizeComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/19-useSize/SizeComponent";
import EffectOnceComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/20-useEffectOnce/EffectOnceComponent";
import ClickOutsideComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/21-useClickOutside/ClickOutsideComponent";
import DarkModeComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/22-useDarkMode/DarkModeComponent";
import CopyToClipboardComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/23-useCopyToClipboard/CopyToClipboardComponent";
import CookieComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/24-useCookie/CookieComponent";
import TranslationComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/25-useTranslation/TranslationComponent";
import OnlineStatusComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/26-useOnlineStatus/OnlineStatusComponent";
import RenderCountComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/27-useRenderCount/RenderCountComponent";
import DebugInformationComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/28-useDebugInformation/DebugInformationComponent";
import HoverComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/29-useHover/HoverComponent";
//#endregion
import LongPressComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/30-useLongPress.js/LongPressComponent";

function App() {
  const mainSiteRoute = () => {
    const queryParameters = new URLSearchParams(window.location.search);
    const type = queryParameters.get("self");
    // ----
    function code({ className, ...properties }) {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          language={match[1]}
          PreTag="div"
          {...properties}
          style={agate}
        />
      ) : (
        <code className={className} {...properties} />
      );
    }
    // ----
    // <ScrollToAnchor></ScrollToAnchor>;
    // ----
    return (
      <>
        {(() => {
          switch (type) {
            case "reactrouterapp":
              return <ReactRouterApp />;
            default:
              return (
                <Router>
                  <Routes>
                    {/* + Layout Page **************** */}
                    <Route path="/" element={<LayoutV2 />}>
                      <Route index element={<Index />} />
                      {/* ++ NavBar **************** */}
                      //#region NavBar Main
                      <Route path="/about" element={<About></About>}></Route>
                      <Route path="/test" element={<Test></Test>}></Route>
                      <Route path="/tutorials/*"></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Tutorials JavaScript
                      <Route
                        path="tutorials/javascript/*"
                        element={<JavaScriptTuto></JavaScriptTuto>}
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_1Intro"
                        element={
                          <JavaScriptIntro
                            components={{ code }}
                          ></JavaScriptIntro>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_2Functions"
                        element={
                          <JavaScriptFunctions
                            components={{ code }}
                          ></JavaScriptFunctions>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_3MakingDecisions"
                        element={
                          <JavaScriptMakingDecisions
                            components={{ code }}
                          ></JavaScriptMakingDecisions>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_4ArraysAndLoops"
                        element={
                          <JavaScriptArraysAndLoops
                            components={{ code }}
                          ></JavaScriptArraysAndLoops>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_5AdvancedConcepts"
                        element={
                          <JavaScriptAdvancedConcepts
                            components={{ code }}
                          ></JavaScriptAdvancedConcepts>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_6JSON"
                        element={
                          <JavaScriptJSON
                            components={{ code }}
                          ></JavaScriptJSON>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_7Objects"
                        element={
                          <JavaScriptObjects
                            components={{ code }}
                          ></JavaScriptObjects>
                        }
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_8AsyncAndPromises"
                        element={
                          <JavaScriptAsyncAndPromises
                            components={{ code }}
                          ></JavaScriptAsyncAndPromises>
                        }
                      ></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Tutorials NodeJS
                      <Route
                        path="/tutorials/nodejs/*"
                        element={<NodeJStTuto></NodeJStTuto>}
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_1InitializationAndScripts"
                        element={
                          <NodeJS_1InitializationAndScripts
                            components={{ code }}
                          ></NodeJS_1InitializationAndScripts>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_2ConfigurePackageJSON"
                        element={
                          <NodeJS_2ConfigurePackageJSON
                            components={{ code }}
                          ></NodeJS_2ConfigurePackageJSON>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_3InstallPackages"
                        element={
                          <NodeJS_3InstallPackages
                            components={{ code }}
                          ></NodeJS_3InstallPackages>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_4InstallJestPackage"
                        element={
                          <NodeJS_4InstallJestPackage
                            components={{ code }}
                          ></NodeJS_4InstallJestPackage>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_5ManageDependencies"
                        element={
                          <NodeJS_5ManageDependencies
                            components={{ code }}
                          ></NodeJS_5ManageDependencies>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_6Debug_NodeJS"
                        element={
                          <NodeJS_6Debug_NodeJS
                            components={{ code }}
                          ></NodeJS_6Debug_NodeJS>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_7NodeJS_Files_Directories"
                        element={
                          <NodeJS_7NodeJS_Files_Directories
                            components={{ code }}
                          ></NodeJS_7NodeJS_Files_Directories>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_8WebAPI_With_NodeJS"
                        element={
                          <NodeJS_8WebAPI_With_NodeJS
                            components={{ code }}
                          ></NodeJS_8WebAPI_With_NodeJS>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_9RouteManagement"
                        element={
                          <NodeJS_9RouteManagement
                            components={{ code }}
                          ></NodeJS_9RouteManagement>
                        }
                      ></Route>
                      <Route
                        path="tutorials/nodejs/NodeJS_ManageNodesVersions"
                        element={
                          <NodeJS_ManageNodesVersions
                            components={{ code }}
                          ></NodeJS_ManageNodesVersions>
                        }
                      ></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Tutorials TypeScript
                      <Route
                        path="/tutorials/typescript/*"
                        element={<TypeScript_Tuto></TypeScript_Tuto>}
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_1VariablesAndTypes"
                        element={
                          <TypeScript_1VariablesAndTypes
                            components={{ code }}
                          ></TypeScript_1VariablesAndTypes>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_2Interfaces"
                        element={
                          <TypeScript_2Interfaces
                            components={{ code }}
                          ></TypeScript_2Interfaces>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_3Functions"
                        element={
                          <TypeScript_3Functions
                            components={{ code }}
                          ></TypeScript_3Functions>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_4Classes"
                        element={
                          <TypeScript_4Classes
                            components={{ code }}
                          ></TypeScript_4Classes>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_5Generics"
                        element={
                          <TypeScript_5Generics
                            components={{ code }}
                          ></TypeScript_5Generics>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_6WorkingWithModules"
                        element={
                          <TypeScript_6WorkingWithModules
                            components={{ code }}
                          ></TypeScript_6WorkingWithModules>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_7ExternalLibraries"
                        element={
                          <TypeScript_7ExternalLibraries
                            components={{ code }}
                          ></TypeScript_7ExternalLibraries>
                        }
                      ></Route>
                      <Route
                        path="tutorials/typescript/TypeScript_8Namespaces"
                        element={
                          <TypeScript_8Namespaces
                            components={{ code }}
                          ></TypeScript_8Namespaces>
                        }
                      ></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Tutorials React
                      <Route
                        path="/tutorials/react/*"
                        element={<React_Tuto></React_Tuto>}
                      ></Route>
                      <Route
                        path="tutorials/react/React_1Intro"
                        element={
                          <React_1Intro components={{ code }}></React_1Intro>
                        }
                      ></Route>
                      <Route
                        path="tutorials/react/React_2DataAndProperties"
                        element={
                          <React_2DataAndProperties
                            components={{ code }}
                          ></React_2DataAndProperties>
                        }
                      ></Route>
                      <Route
                        path="tutorials/react/React_3StateAndEvents"
                        element={
                          <React_3StateAndEvents
                            components={{ code }}
                          ></React_3StateAndEvents>
                        }
                      ></Route>
                      <Route
                        path="tutorials/react/React_4GetRouteParameters"
                        element={
                          <React_4GetRouteParameters
                            components={{ code }}
                          ></React_4GetRouteParameters>
                        }
                      ></Route>
                      <Route
                        path="tutorials/react/React_5CreateAReactTypeScriptApp"
                        element={
                          <React_5CreateAReactTypeScriptApp
                            components={{ code }}
                          ></React_5CreateAReactTypeScriptApp>
                        }
                      ></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Tutorials Markdown
                      <Route
                        path="/generics/markdown/*"
                        element={<Markdown_TOC></Markdown_TOC>}
                      ></Route>
                      <Route
                        path="tutorials/markdown/markdown"
                        element={
                          <Markdown_Tuto components={{ code }}></Markdown_Tuto>
                        }
                      ></Route>
                      <Route
                        path="tutorials/markdown/mdx"
                        element={
                          <Markdown_MDX components={{ code }}></Markdown_MDX>
                        }
                      ></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Generics VSCode
                      <Route
                        path="/generics/vscode/*"
                        element={<VSCode_TOC></VSCode_TOC>}
                      ></Route>
                      <Route
                        path="generics/vscode/init"
                        element={
                          <VSCode_1InitializationAndScripts
                            components={{ code }}
                          ></VSCode_1InitializationAndScripts>
                        }
                      ></Route>{" "}
                      <Route
                        path="generics/vscode/shortcuts"
                        element={
                          <VSCode_ConfigureShortcuts
                            components={{ code }}
                          ></VSCode_ConfigureShortcuts>
                        }
                      ></Route>
                      <Route
                        path="generics/vscode/snippets"
                        element={
                          <VSCode_ConfigureSnippets
                            components={{ code }}
                          ></VSCode_ConfigureSnippets>
                        }
                      ></Route>
                      <Route
                        path="generics/vscode/uninstall"
                        element={
                          <VSCode_NpmUninstallPackage
                            components={{ code }}
                          ></VSCode_NpmUninstallPackage>
                        }
                      ></Route>
                      <Route
                        path="generics/vscode/npmts"
                        element={
                          <VSCode_NpmInstallTypeScript
                            components={{ code }}
                          ></VSCode_NpmInstallTypeScript>
                        }
                      ></Route>
                      <Route
                        path="generics/vscode/mdit"
                        element={
                          <VSCode_NpmMarkdownIt
                            components={{ code }}
                          ></VSCode_NpmMarkdownIt>
                        }
                      ></Route>
                      <Route
                        path="generics/vscode/gitadd"
                        element={
                          <VSCode_GitHubAddSourceControl
                            components={{ code }}
                          ></VSCode_GitHubAddSourceControl>
                        }
                      ></Route>
                      //#endregion
                      {/* new section */}
                      //#region NavBar Generics Errors
                      <Route
                        path="generics/errors"
                        element={
                          <Errors_TOC components={{ code }}></Errors_TOC>
                        }
                      ></Route>
                      //#endregion
                      {/* ++ SideBar **************** */}
                      {/* ------- React Dev ********** */}
                      //#region Side Bar React Dev
                      <Route
                        path="/reactdev/*"
                        element={<ReactDevApp></ReactDevApp>}
                      ></Route>
                      {/* ------- React Web Dev Simplified **************** */}
                      <Route
                        path="/budgetapp"
                        element={<BudgetApp></BudgetApp>}
                      ></Route>
                      <Route
                        path="/tanstack"
                        element={<ReactQueryApp></ReactQueryApp>}
                      ></Route>
                      //#endregion
                      {/* ------- React Hooks- Web Dev Simplified ************** */}
                      //#region Side Bar React Hooks
                      <Route path="/reacthooks" element={<Home></Home>} />
                      <Route path="/useState" element={<UseStatePage />} />
                      <Route path="/useEffect" element={<UseEffectPage />} />
                      <Route
                        path="/useContext"
                        element={<UseContextPage></UseContextPage>}
                      />
                      <Route
                        path="/useRef"
                        element={<UseRefPage></UseRefPage>}
                      />
                      <Route
                        path="/useMemo"
                        element={<UseMemoPage></UseMemoPage>}
                      />
                      <Route
                        path="/useCallback"
                        element={<UseCallbackPage></UseCallbackPage>}
                      />
                      <Route
                        path="/useReducer"
                        element={<UseReducerPage></UseReducerPage>}
                      />
                      <Route
                        path="/useTransition"
                        element={<UseTransitionPage></UseTransitionPage>}
                      />
                      <Route
                        path="/useDeferredValue"
                        element={<UseDeferredValuePage></UseDeferredValuePage>}
                      />
                      <Route
                        path="/useLayoutEffect"
                        element={<UseLayoutEffectPage></UseLayoutEffectPage>}
                      />
                      <Route
                        path="/useLayoutEffect_UseEff"
                        element={
                          <UseLayoutEffect_UseEff></UseLayoutEffect_UseEff>
                        }
                      />
                      <Route
                        path="/useLayoutEffect_UseLayoutEff"
                        element={
                          <UseLayoutEffect_UseLayoutEff></UseLayoutEffect_UseLayoutEff>
                        }
                      />
                      <Route
                        path="/UseDebugValuePage"
                        element={<UseDebugValuePage></UseDebugValuePage>}
                      />
                      <Route
                        path="/useCustomHooksPage"
                        element={<UseCustomHooksPage></UseCustomHooksPage>}
                      />
                      <Route
                        path="/useImperativeHandlePage"
                        element={
                          <UseImperativeHandlePage></UseImperativeHandlePage>
                        }
                      />
                      <Route
                        path="/useIdPage"
                        element={<UseIdPage></UseIdPage>}
                      />
                      <Route
                        path="/useTogglePage"
                        element={<UseTogglePage></UseTogglePage>}
                      />
                      <Route
                        path="/useTimeoutPage"
                        element={<UseTimeoutPage></UseTimeoutPage>}
                      />
                      <Route
                        path="/useDebouncePage"
                        element={<UseDebouncePage></UseDebouncePage>}
                      />
                      <Route
                        path="/useUpdateEffectPage"
                        element={<UseUpdateEffectPage></UseUpdateEffectPage>}
                      />
                      <Route
                        path="/useArrayPage"
                        element={<UseArrayPage></UseArrayPage>}
                      />
                      <Route
                        path="/UsePreviousPage"
                        element={<UsePreviousPage></UsePreviousPage>}
                      />
                      <Route
                        path="/UseStateWithHistoryPage"
                        element={
                          <UseStateWithHistoryPage></UseStateWithHistoryPage>
                        }
                      />
                      <Route
                        path="/UseStoragePage"
                        element={<UseStoragePage></UseStoragePage>}
                      />
                      <Route
                        path="/UseAsyncPage"
                        element={<UseAsyncPage></UseAsyncPage>}
                      />
                      <Route path="/UseFetchPage" element={<UseFetchPage />} />
                      <Route
                        path="/UseScriptPage"
                        element={<UseScriptPage />}
                      />
                      <Route
                        path="/DeepCompareEffectComponent"
                        element={<DeepCompareEffectComponent />}
                      />
                      <Route
                        path="/EventListenerComponent"
                        element={<EventListenerComponent />}
                      />
                      <Route
                        path="/OnScreenComponent"
                        element={<OnScreenComponent />}
                      />
                      <Route
                        path="/WindowSizeComponent"
                        element={<WindowSizeComponent />}
                      />
                      <Route
                        path="/MediaQueryComponent"
                        element={<MediaQueryComponent />}
                      />
                      <Route
                        path="/GeolocationComponent"
                        element={<GeolocationComponent />}
                      />
                      <Route
                        path="/SizeComponent"
                        element={<SizeComponent />}
                      />
                      <Route
                        path="/EffectOnceComponent"
                        element={<EffectOnceComponent />}
                      />
                      <Route
                        path="/StateWithValidationComponent"
                        element={<StateWithValidationComponent />}
                      />
                      <Route
                        path="/ClickOutsideComponent"
                        element={<ClickOutsideComponent />}
                      />
                      <Route
                        path="/DarkModeComponent"
                        element={<DarkModeComponent />}
                      />
                      <Route
                        path="/CookieComponent"
                        element={<CookieComponent />}
                      />
                      <Route
                        path="/CopyToClipboardComponent"
                        element={<CopyToClipboardComponent />}
                      />
                      <Route
                        path="/TranslationComponent"
                        element={<TranslationComponent />}
                      />
                      <Route
                        path="/OnlineStatusComponent"
                        element={<OnlineStatusComponent />}
                      />
                      <Route
                        path="/RenderCountComponent"
                        element={<RenderCountComponent />}
                      />
                      <Route
                        path="/HoverComponent"
                        element={<HoverComponent />}
                      />
                      <Route
                        path="/DebugInformationComponent"
                        element={<DebugInformationComponent />}
                      />
                      //#endregion
                      <Route
                        path="/LongPressComponent"
                        element={<LongPressComponent />}
                      />
                    </Route>
                  </Routes>
                </Router>
              );
          }
        })()}
      </>
    );
  };

  return mainSiteRoute();
  // </BrowserRouter>
}

export default App;
