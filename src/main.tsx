import "./main.css";

import { createHashHistory, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app";
import { routeTree } from "./routeTree.gen";
import { _useAuthStore } from "./store/useAuthStore";

const auth = _useAuthStore.getState();

const router = createRouter({
  routeTree,
  history: createHashHistory(),
  defaultNotFoundComponent: () => <div>Not Found</div>,
  context: { auth },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>
);
