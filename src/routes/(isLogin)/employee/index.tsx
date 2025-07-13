import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import { Page } from "../../../components/Commons";
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
        <div style={{ position: "fixed", flexDirection: "row", display: "flex" }}>
          <motion.div layout>123</motion.div>
          {tab === 0 && <motion.div layout>123</motion.div>}
        </div>
      </EmployeeContainer>
    </Page>
  );
}

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
