import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CartState from "./components/context/cart/CartState.js";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartState>
      <App />
    </CartState>
  </StrictMode>
);
