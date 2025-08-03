import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import { Page } from "../../../components/Commons";
import EmployeeListItem from "../../../components/EmployeeListItem";
import PageTransitionWrapper from "../../../components/PageTransitionWrapper";
import TabBar from "../../../components/TabBar";

export const Route = createFileRoute("/(isLogin)/employee/")({
  component: () => (
    <PageTransitionWrapper>
      <RouteComponent />
    </PageTransitionWrapper>
  ),
});

function RouteComponent() {
  const [tab, setTap] = useState(0);

  return (
    <Page>
      <TabBar tapItems={[<p>인사</p>, <p>고용</p>]} setTab={setTap} tab={tab} />
      <EmployeeContainer>
        <ScrollContainer>
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
          <EmployeeListItem />
        </ScrollContainer>
      </EmployeeContainer>
    </Page>
  );
}

const EmployeeContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  /* margin-bottom: 5rem; */
`;

const ScrollContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;

  width: 100%;
  height: auto;
  padding: 1rem;
  padding-bottom: 6rem;

  gap: 0.5rem;
`;
