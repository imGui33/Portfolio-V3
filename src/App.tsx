import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./Components/Navbar";
import ProgressBlog from "./Components/ProgressBlog";
import Rotas from "./Components/Routes";
import { GlobalStyles } from "./global/style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
      <ProgressBlog />
      <GlobalStyles />
      <Rotas />
    </>
  );
}

export default App;
