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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
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
    </Routes>
  );
}

export default App;
