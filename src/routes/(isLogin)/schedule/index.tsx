import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";

import { Page } from "../../../components/Commons";
import PageTransitionWrapper from "../../../components/PageTransitionWrapper";
import TabBar from "../../../components/TabBar";

export const Route = createFileRoute("/(isLogin)/schedule/")({
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
      <TabBar tapItems={[<p>주요 일정</p>, <p>달력</p>, <p>이벤트</p>]} setTab={setTap} tab={tab} />
      <ScheduleContainer>{tab}</ScheduleContainer>
    </Page>
  );
}

const ScheduleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
