import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import styled from "styled-components";

import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import type { AuthGetState } from "../store/useAuthStore";

type MyRouterContext = {
  auth: AuthGetState;
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <BottomNav />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 100%;
`;
