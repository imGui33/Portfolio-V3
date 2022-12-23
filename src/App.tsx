import { useState } from "react";
import reactLogo from "./assets/react.svg";
import WebInterface from "./Components/WebInterface";
import { GlobalStyles } from "./global/style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <WebInterface />
    </>
  );
}

export default App;
