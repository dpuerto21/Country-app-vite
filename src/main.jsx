import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { Apphelloword } from "./apphelloword";
import { CounterApp } from "./counterApp";
import "./style.css";

// function App() {
//   return <h1>Hola Mundo</h1>;
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Apphelloword /> */}
    <CounterApp value={20} />
  </StrictMode>
);
