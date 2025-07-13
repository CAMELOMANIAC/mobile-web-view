import { createFileRoute } from "@tanstack/react-router";
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
      {/* <EmployeeContainer></EmployeeContainer> */}
    </Page>
  );
}

const EmployeeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 60rem;
`;
