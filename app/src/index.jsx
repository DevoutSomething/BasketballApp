import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home.jsx";

// Create a container div for your app
const container = document.createElement("div");
document.body.appendChild(container);

// Use the container as the root element
const root = createRoot(container);

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
root.render(<App />);
