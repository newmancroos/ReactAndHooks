import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HooksUseContext from "./hooks/HooksUseContext.jsx";
import { CounterProvider } from "./hooks/CounterContext.jsx";
import HooksUseReducer from './hooks/HooksUseReducer.jsx'
import HooksUseCallback2 from './hooks/HooksUseCallback2.jsx'
import HooksUseCallback3 from './hooks/HooksUseCallback3.jsx'
import HooksUseMemo  from './hooks/HooksUseMemo.jsx'
import HooksUseCustom from './hooks/HooksUseCustom.jsx'
// createRoot(document.getElementById("root")).render(
//   // <StrictMode>
//     {/* <CounterProvider> */}
//       <HooksUseCallback />
//     {/* </CounterProvider> */}
//   //  </StrictMode>
// );



createRoot(document.getElementById("root")).render(
  <StrictMode>
      <HooksUseCustom />
    </StrictMode>
);