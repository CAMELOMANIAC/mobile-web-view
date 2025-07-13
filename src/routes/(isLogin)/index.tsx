import { createFileRoute } from "@tanstack/react-router";
import styled from "styled-components";

import logoImage from "../../assets/app-logo.png";
import { Page } from "../../components/Commons";
import PageTransitionWrapper from "../../components/PageTransitionWrapper";

export const Route = createFileRoute("/(isLogin)/")({
  component: () => (
    <PageTransitionWrapper moveDirection="left">
      <Index />
    </PageTransitionWrapper>
  ),
});

export function Index() {
  return (
    <Page style={{ height: "100rem" }}>
      <LogoMain src={logoImage}></LogoMain>
    </Page>
  );
}

const LogoMain = styled.img`
  position: relative;

  width: 100%;
  margin-top: 30rem;

  object-fit: contain;
`;
