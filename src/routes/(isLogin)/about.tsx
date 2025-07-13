import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Page } from "../../components/Commons";
import PageTransitionWrapper from "../../components/PageTransitionWrapper";

export const Route = createFileRoute("/(isLogin)/about")({
  component: () => (
    <PageTransitionWrapper>
      <RouteComponent />
    </PageTransitionWrapper>
  ),
});

function RouteComponent() {
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
      <h3>About</h3>
      <p>네이티브에서 받은 값: {typeof message === "string" ? message : JSON.stringify(message)}</p>
    </Page>
  );
}
