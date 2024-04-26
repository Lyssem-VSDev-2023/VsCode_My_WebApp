import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <b>Most Used</b>
      <ul>
        <li>
          <NavLink to={"/useState"}>useState</NavLink>
        </li>
        <li>
          <NavLink to={"/useEffect"}>useEffect</NavLink>
        </li>
        <li>
          <NavLink to={"/useContext"}>useContext</NavLink>
        </li>
      </ul>
      <br /> <b>Less Used</b>
      <ul>
        <li>
          <NavLink to={"/useRef"}>useRef</NavLink>
        </li>
        <li>
          <NavLink to={"/useMemo"}>useMemo</NavLink>
        </li>
        <li>
          <NavLink to={"/useCallback"}>useCallback</NavLink>
        </li>
        <li>
          <NavLink to={"/useReducer"}>useReducer</NavLink>
        </li>
        <li>
          <NavLink to={"/useTransition"}>useTransition</NavLink>
        </li>
        <li>
          <NavLink to={"/useDeferredValue"}>useDeferredValue</NavLink>
        </li>
      </ul>
      <br /> <b>Optional Hooks</b>
      <ul>
        <li>
          <NavLink to={"/useLayoutEffect"}>useLayoutEffect</NavLink>
        </li>
        <li>
          <NavLink to={"/UseDebugValuePage"}>useDebugValue</NavLink>
        </li>
        <li>
          <NavLink to={"/useImperativeHandlePage"}>useImperativeHandle</NavLink>
        </li>
        <li>
          <NavLink to={"/useIdPage"}>useId</NavLink>
        </li>
      </ul>
      <br /> <b>Custom Hooks</b>
      <ol>
        <li>
          <NavLink to={"/useCustomHooksPage"}>
            UseCustomHooks (useLocalStorage Example)
          </NavLink>
        </li>
        <li>
          <NavLink to={"/useTogglePage"}>useTogglePage</NavLink>
        </li>
        <li>
          <NavLink to={"/useTimeoutPage"}>useTimeout</NavLink>
        </li>
        <li>
          <NavLink to={"/useDebouncePage"}>useDebounce</NavLink>
        </li>
        <li>
          <NavLink to={"/useUpdateEffectPage"}>useUpdateEffect</NavLink>
        </li>
        <li>
          <NavLink to={"/useArrayPage"}>useArray</NavLink>
        </li>
        <li>
          <NavLink to={"/UsePreviousPage"}>usePrevious</NavLink>
        </li>
        <li>
          <NavLink to={"/UseStateWithHistoryPage"}>useStateWithHistory</NavLink>
        </li>
        <li>
          <NavLink to={"/UseStoragePage"}>useStorage</NavLink>
        </li>
        <li>
          <NavLink to={"/UseAsyncPage"}>useAsync</NavLink>
        </li>
        <li>
          <NavLink to={"/UseFetchPage"}>useFetch</NavLink>
        </li>
        <li>
          <NavLink to={"/UseScriptPage"}>useScript</NavLink>
        </li>
        <li>
          <NavLink to={"/DeepCompareEffectComponent"}>
            useDeepCompareEffect
          </NavLink>
        </li>
        <li>
          <NavLink to={"/EventListenerComponent"}>useEventListener</NavLink>
        </li>
        <li>
          <NavLink to={"/OnScreenComponent"}>useOnScreen</NavLink>
        </li>
        <li>
          <NavLink to={"/WindowSizeComponent"}>useWindowSize</NavLink>
        </li>
        <li>
          <NavLink to={"/MediaQueryComponent"}>useMediaQuery</NavLink>
        </li>
        <li>
          <NavLink to={"/GeolocationComponent"}>useGeolocation</NavLink>
        </li>
        <li>
          <NavLink to={"/StateWithValidationComponent"}>
            useStateWithValidation
          </NavLink>
        </li>
        <li>
          <NavLink to={"/SizeComponent"}>useSize</NavLink>
        </li>
        <li>
          <NavLink to={"/EffectOnceComponent"}>useEffectOnce</NavLink>
        </li>
        <li>
          <NavLink to={"/ClickOutsideComponent"}>useClickOutside</NavLink>
        </li>
        <li>
          <NavLink to={"/DarkModeComponent"}>useDarkMode</NavLink>
        </li>
        <li>
          <NavLink to={"/CopyToClipboardComponent"}>useCopyToClipboard</NavLink>
        </li>
        <li>
          <NavLink to={"/CookieComponent"}>useCookie</NavLink>
        </li>
        <li>
          <NavLink to={"/TranslationComponent"}>useTranslation</NavLink>
        </li>
        <li>
          <NavLink to={"/OnlineStatusComponent"}>useOnlineStatus</NavLink>
        </li>
        <li>
          <NavLink to={"/RenderCountComponent"}>useRenderCount</NavLink>
        </li>
        <li>
          <NavLink to={"/DebugInformationComponent"}>
            useDebugInformation
          </NavLink>
        </li>
        <li>
          <NavLink to={"/HoverComponent"}>useHover</NavLink>
        </li>
        <li>
          <NavLink to={"/LongPressComponent"}>useLongPress</NavLink>
        </li>
      </ol>
    </div>
  );
}

export default Home;
