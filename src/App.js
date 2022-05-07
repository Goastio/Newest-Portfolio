import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./ScrollToTop";
import Nav from "./components/Nav";
import About from "./components/About";
import { useState } from "react";


function App() {

  const [isActive, setIsActive] = useState("Home");

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Route exact path="/">
          <Main isActive={isActive} setIsActive={setIsActive} />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
