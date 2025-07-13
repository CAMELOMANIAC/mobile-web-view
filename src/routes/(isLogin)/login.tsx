import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Page } from "../../components/Commons";
import PageTransitionWrapper from "../../components/PageTransitionWrapper";
import { useAuthGetState, useAuthSetState } from "../../store/useAuthStore";

export const Route = createFileRoute("/(isLogin)/login")({
  component: () => (
    <PageTransitionWrapper>
      <RouteComponent />
    </PageTransitionWrapper>
  ),
});

function RouteComponent() {
  const login = useAuthSetState((state) => state.login);
  const isAuthenticated = useAuthGetState((state) => state.isAuthenticated);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function handleMessage(event: Event) {
      // 타입 가드로 MessageEvent인지 확인
      if ("data" in event) {
        const messageEvent = event as MessageEvent<string>;
        setMessage(messageEvent.data);
      }
    }
    document.addEventListener("message", handleMessage);
    return () => document.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Page>
      <p>Hello "/(isLogin)/login"!</p>
      <p>isAuthenticated: {isAuthenticated ? "true" : "false"}</p>
      <button onClick={() => login("user")}>login</button>
      <p>네이티브에서 받은 값: {typeof message === "string" ? message : JSON.stringify(message)}</p>
    </Page>
  );
}
