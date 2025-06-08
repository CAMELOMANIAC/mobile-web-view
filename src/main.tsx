import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import "./main.css";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  history: createHashHistory(),
  defaultNotFoundComponent: () => <div>Not Found</div>,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
