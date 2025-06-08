import { createRootRoute, Outlet } from "@tanstack/react-router";
import styled from "styled-components";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

export const Route = createRootRoute({
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
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
