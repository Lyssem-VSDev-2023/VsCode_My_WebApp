import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LayoutV2 from "./LayoutV2";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Test from "./Pages/Test";

//React Works
import ReactDevApp from "../Works/React-Dev/src/ReactDevApp";
import ReactRouterApp from "../Works/React-Router/src/ReactRouterApp";

//React Web Dev Simplified
import BudgetApp from "../Works/WebDevSimplified/Vite_React_BudgetApp/src/BudgetApp";
import ReactQueryApp from "../Works/WebDevSimplified/Vite_React_ReactQuery_TanStackQuary/src/ReactQueryApp";

// React Hooks- Web Dev Simplified
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
import LongPressComponent from "../Works/WebDevSimplified/Vite_React_Hooks/src/UsefulCustomHooks/30-useLongPress.js/LongPressComponent";

import JavaScriptTuto from "../Tutorials/JavaScript/ReadMe.mdx";
import JavaScriptTutoIntro from "../Tutorials/JavaScript/JavaScript_1Intro.mdx";

import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
                    //#region Main Structure
                    <Route path="/" element={<LayoutV2 />}>
                      <Route index element={<Index />} />
                      //#endregion
                      {/* ++ NavBar **************** */}
                      //#region NavBar
                      <Route path="/about" element={<About></About>}></Route>
                      <Route path="/test" element={<Test></Test>}></Route>
                      <Route path="/tutorials/*"></Route>
                      <Route
                        path="tutorials/javascript/*"
                        element={<JavaScriptTuto></JavaScriptTuto>}
                      ></Route>
                      <Route
                        path="tutorials/javascript/JavaScript_1Intro"
                        element={
                          <JavaScriptTutoIntro
                            components={{ code }}
                          ></JavaScriptTutoIntro>
                        }
                      ></Route>
                      //#endregion
                      {/* ++ SideBar **************** */}
                      //#region Side Bar React Dev
                      {/* ------- React Dev ********** */}
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
                      <Route
                        path="/LongPressComponent"
                        element={<LongPressComponent />}
                      />
                    </Route>
                    //#endregion
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
