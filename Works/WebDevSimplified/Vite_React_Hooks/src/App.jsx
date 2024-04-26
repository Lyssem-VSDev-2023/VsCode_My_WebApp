//Navigation
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseStatePage from "./UseStatePage";
import UseEffectPage from "./UseEffectPage";
import UseContextPage from "./UseContextPage";
import UseRefPage from "./UseRefPage";
import UseMemoPage from "./UseMemoPage";
import UseCallbackPage from "./UseCallbackPage";
import UseReducerPage from "./UseReducerPage";
import UseTransitionPage from "./UseTransitionPage";
import UseDeferredValuePage from "./UseDeferredValuePage";
import UseLayoutEffectPage from "./UseLayoutEffectPage";
import UseLayoutEffect_UseEff from "./UseLayoutEffect_UseEff";
import UseLayoutEffect_UseLayoutEff from "./UseLayoutEffect_UseLayoutEff";
import UseDebugValuePage from "./UseDebugValuePage";
import UseCustomHooksPage from "./UseCustomHooksPage";
import UseImperativeHandlePage from "./UseImperativeHandlePage";
import UseIdPage from "./UseIdPage";
import UseTogglePage from "./UsefulCustomHooks/1-useToggle/UseTogglePage";
import UseTimeoutPage from "./UsefulCustomHooks/2-useTimeout/UseTimeoutPage";
import UseDebouncePage from "./UsefulCustomHooks/3-useDebounce/useDebouncePage";
import UseUpdateEffectPage from "./UsefulCustomHooks/4-useUpdateEffect/UseUpdateEffectPage";
import UseArrayPage from "./UsefulCustomHooks/5-useArray/UseArrayPage";
import UsePreviousPage from "./UsefulCustomHooks/6-usePrevious/UsePreviousPage";
import UseStateWithHistoryPage from "./UsefulCustomHooks/7-useStateWithHistory/UseStateWithHistoryPage";
import UseStoragePage from "./UsefulCustomHooks/8-useStorage/useStoragePage";
import UseAsyncPage from "./UsefulCustomHooks/9-useAsync/UseAsyncPage";
import UseFetchPage from "./UsefulCustomHooks/10-useFetch/UseFetchPage";
import UseScriptPage from "./UsefulCustomHooks/11-useScript/UseScriptPage";
import DeepCompareEffectComponent from "./UsefulCustomHooks/12-useDeepCompareEffect/DeepCompareEffectComponent";
import EventListenerComponent from "./UsefulCustomHooks/13-useEventListener/EventListenerComponent";
import OnScreenComponent from "./UsefulCustomHooks/14-useOnScreen/OnScreenComponent";
import WindowSizeComponent from "./UsefulCustomHooks/15-useWindowSize/WindowSizeComponent";
import MediaQueryComponent from "./UsefulCustomHooks/16-useMediaQuery/MediaQueryComponent";
import GeolocationComponent from "./UsefulCustomHooks/17-useGeolocation/GeolocationComponent";
import StateWithValidationComponent from "./UsefulCustomHooks/18-useStateWithValidation/StateWithValidationComponent";
import SizeComponent from "./UsefulCustomHooks/19-useSize/SizeComponent";
import EffectOnceComponent from "./UsefulCustomHooks/20-useEffectOnce/EffectOnceComponent";
import ClickOutsideComponent from "./UsefulCustomHooks/21-useClickOutside/ClickOutsideComponent";
import DarkModeComponent from "./UsefulCustomHooks/22-useDarkMode/DarkModeComponent";
import CopyToClipboardComponent from "./UsefulCustomHooks/23-useCopyToClipboard/CopyToClipboardComponent";
import CookieComponent from "./UsefulCustomHooks/24-useCookie/CookieComponent";
import TranslationComponent from "./UsefulCustomHooks/25-useTranslation/TranslationComponent";
import OnlineStatusComponent from "./UsefulCustomHooks/26-useOnlineStatus/OnlineStatusComponent";
import RenderCountComponent from "./UsefulCustomHooks/27-useRenderCount/RenderCountComponent";
import DebugInformationComponent from "./UsefulCustomHooks/28-useDebugInformation/DebugInformationComponent";
import HoverComponent from "./UsefulCustomHooks/29-useHover/HoverComponent";
import LongPressComponent from "./UsefulCustomHooks/30-useLongPress.js/LongPressComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/reacthooks" element={<Home></Home>} />
      <Route path="/useState" element={<UseStatePage />} />
      <Route path="/useEffect" element={<UseEffectPage />} />
      <Route path="/useContext" element={<UseContextPage></UseContextPage>} />
      <Route path="/useRef" element={<UseRefPage></UseRefPage>} />
      <Route path="/useMemo" element={<UseMemoPage></UseMemoPage>} />
      <Route
        path="/useCallback"
        element={<UseCallbackPage></UseCallbackPage>}
      />
      <Route path="/useReducer" element={<UseReducerPage></UseReducerPage>} />
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
        element={<UseLayoutEffect_UseEff></UseLayoutEffect_UseEff>}
      />
      <Route
        path="/useLayoutEffect_UseLayoutEff"
        element={<UseLayoutEffect_UseLayoutEff></UseLayoutEffect_UseLayoutEff>}
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
        element={<UseImperativeHandlePage></UseImperativeHandlePage>}
      />
      <Route path="/useIdPage" element={<UseIdPage></UseIdPage>} />
      <Route path="/useTogglePage" element={<UseTogglePage></UseTogglePage>} />
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
      <Route path="/useArrayPage" element={<UseArrayPage></UseArrayPage>} />
      <Route
        path="/UsePreviousPage"
        element={<UsePreviousPage></UsePreviousPage>}
      />
      <Route
        path="/UseStateWithHistoryPage"
        element={<UseStateWithHistoryPage></UseStateWithHistoryPage>}
      />
      <Route
        path="/UseStoragePage"
        element={<UseStoragePage></UseStoragePage>}
      />
      <Route path="/UseAsyncPage" element={<UseAsyncPage></UseAsyncPage>} />
      <Route path="/UseFetchPage" element={<UseFetchPage />} />
      <Route path="/UseScriptPage" element={<UseScriptPage />} />
      <Route
        path="/DeepCompareEffectComponent"
        element={<DeepCompareEffectComponent />}
      />
      <Route
        path="/EventListenerComponent"
        element={<EventListenerComponent />}
      />
      <Route path="/OnScreenComponent" element={<OnScreenComponent />} />
      <Route path="/WindowSizeComponent" element={<WindowSizeComponent />} />
      <Route path="/MediaQueryComponent" element={<MediaQueryComponent />} />
      <Route path="/GeolocationComponent" element={<GeolocationComponent />} />
      <Route path="/SizeComponent" element={<SizeComponent />} />
      <Route path="/EffectOnceComponent" element={<EffectOnceComponent />} />
      <Route
        path="/StateWithValidationComponent"
        element={<StateWithValidationComponent />}
      />
      <Route
        path="/ClickOutsideComponent"
        element={<ClickOutsideComponent />}
      />
      <Route path="/DarkModeComponent" element={<DarkModeComponent />} />
      <Route path="/CookieComponent" element={<CookieComponent />} />
      <Route
        path="/CopyToClipboardComponent"
        element={<CopyToClipboardComponent />}
      />
      <Route path="/TranslationComponent" element={<TranslationComponent />} />
      <Route
        path="/OnlineStatusComponent"
        element={<OnlineStatusComponent />}
      />
      <Route path="/RenderCountComponent" element={<RenderCountComponent />} />
      <Route path="/HoverComponent" element={<HoverComponent />} />
      <Route
        path="/DebugInformationComponent"
        element={<DebugInformationComponent />}
      />
      <Route path="/LongPressComponent" element={<LongPressComponent />} />
    </Routes>
  );
}

export default App;
