import * as React from "react";
import { createRoot } from "react-dom/client";
import Title from "./components/Title.jsx";
import Header from "./components/Header.jsx";

// Create a container div for your app
const container = document.createElement("div");
document.body.appendChild(container);

// Use the container as the root element
const root = createRoot(container);

function App() {
  return (
    <div>
      <Title />
      <Header />
    </div>
  );
}
root.render(<App />);
