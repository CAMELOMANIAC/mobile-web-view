import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import styled from "styled-components";

import logoImage from "../../assets/app-logo.png";
import { Page } from "../../components/Commons";
import PageTransitionWrapper from "../../components/PageTransitionWrapper";
import { useGNBSetState } from "../../store/useGNBStore";

export const Route = createFileRoute("/(isLogin)/")({
  component: () => (
    <PageTransitionWrapper moveDirection="left">
      <Index />
    </PageTransitionWrapper>
  ),
});

export function Index() {
  const { setIsShowMainButton, setMainButtonTitle, setMainButtonClickHandler } = useGNBSetState((state) => state);

  useEffect(() => {
    setIsShowMainButton(true);
    setMainButtonTitle("길게 눌러 진행");
    setMainButtonClickHandler(() => {});

    return () => {
      setIsShowMainButton(false);
      setMainButtonTitle(null);
      setMainButtonClickHandler(() => {});
    };
  }, []); // eslint-disable-line

  return (
    <Page style={{ height: "100rem" }}>
      <LogoMain src={logoImage}></LogoMain>
    </Page>
  );
}

const LogoMain = styled.img`
  position: relative;

  width: 100%;
  margin-top: 100rem;

  object-fit: contain;
`;
