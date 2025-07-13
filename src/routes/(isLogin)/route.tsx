import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(isLogin)")({
  beforeLoad: ({ context, location }) => {
    if (location.pathname === "/login") return;
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
});
