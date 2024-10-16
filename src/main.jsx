import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoProviders } from "./todo-providers/todo-providers.jsx";

createRoot(document.getElementById("root")).render(
  <TodoProviders>
    <App />
  </TodoProviders>
);
